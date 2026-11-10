// Límite de envíos del formulario de contacto, en memoria.
//
// Es la segunda capa, no la principal: en Vercel cada instancia de función
// tiene su propia memoria, así que un atacante que caiga en instancias
// distintas puede pasar más envíos de los que dice aquí. La capa principal
// es la regla de rate limit del Vercel Firewall (POST a /contacto), que se
// configura en el dashboard. Esto cubre lo que se cuele y, sobre todo,
// protege la cuenta de Gmail que envía (límite de ~500 correos al día):
// si se gasta ese cupo, Google bloquea el envío y se pierden leads reales.

const VENTANA_IP_MS = 10 * 60 * 1000; // 10 minutos
const MAX_POR_IP = 3; // un humano real casi nunca manda más de uno
const VENTANA_GLOBAL_MS = 60 * 60 * 1000; // 1 hora
const MAX_GLOBAL = 30; // tope por instancia, muy arriba del tráfico real

const porIp = new Map<string, number[]>();
let globales: number[] = [];

function recientes(marcas: number[], ventana: number, ahora: number) {
  return marcas.filter((t) => ahora - t < ventana);
}

export function permitirEnvio(ip: string): boolean {
  const ahora = Date.now();

  globales = recientes(globales, VENTANA_GLOBAL_MS, ahora);
  if (globales.length >= MAX_GLOBAL) return false;

  const previos = recientes(porIp.get(ip) ?? [], VENTANA_IP_MS, ahora);
  if (previos.length >= MAX_POR_IP) {
    porIp.set(ip, previos);
    return false;
  }

  previos.push(ahora);
  porIp.set(ip, previos);
  globales.push(ahora);

  // Limpieza para que el Map no crezca sin fin con IPs viejas.
  if (porIp.size > 5000) {
    for (const [k, v] of porIp) {
      if (recientes(v, VENTANA_IP_MS, ahora).length === 0) porIp.delete(k);
    }
  }
  return true;
}
