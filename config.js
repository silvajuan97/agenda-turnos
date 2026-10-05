// ============================================================
// CONFIGURACIÓN DE LA AGENDA
// ============================================================
// Este archivo NO se reemplaza cuando subís una versión nueva de
// agenda-turnos.html (o index.html) — podés tocar estos valores cuando
// quieras y van a seguir así, sin que haga falta pedírmelo.

// Pegá acá la URL que te dio Google Apps Script al implementar como
// "Aplicación web". Tiene esta forma:
// https://script.google.com/macros/s/AKfycb.../exec
const AGENDA_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwjOlYQbqy-dv2QuUSufE_P_eTkpG4JSJjr-XGVx7R04auHY3l0GhOLxlSwOt-28TjmSA/exec';

// Título que aparece en la pestaña del navegador y arriba de la agenda.
const APP_TITLE = 'Agenda de turnos';

// Duración por defecto (en minutos) de una sesión con paciente nueva —
// se usa para precargar el selector de duración y al tocar un hueco
// libre en la grilla de la vista Semana.
const DEFAULT_DURATION = 40;

// Rango horario que se dibuja en la grilla de la vista Semana.
// Usá números enteros de 0 a 24 (ej: 8 = 8:00, 21 = 21:00).
const START_HOUR = 8;
const END_HOUR = 21;

// Cada cuántos milisegundos se actualiza sola la agenda para traer
// cambios cargados desde otro dispositivo (además de actualizarse al
// volver a la pestaña y al tocar "↻ Actualizar"). 60000 = 60 segundos.
const AUTO_REFRESH_MS = 60000;
