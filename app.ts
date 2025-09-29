type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function safeParseJSON<T = unknown>(raw: string): Result<T> {
  try {
    return { ok: true, value: JSON.parse(raw) as T };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

const sample = '{"name":"dev","count":3}';
const parsed = safeParseJSON<{ name: string; count: number }>(sample);
console.log(parsed.ok ? parsed.value.name.toUpperCase() : parsed.error);
