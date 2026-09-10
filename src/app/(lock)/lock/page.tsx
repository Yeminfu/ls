export default async function LockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Лига Спас
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Сайт временно закрыт.
          </p>
        </div>

        <form className="mt-8 space-y-6" method="post" action="/api/site-lock">
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              Неверный пароль
            </div>
          )}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Пароль
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}