export function MailchimpForm() {
  return (
    <form
      action="https://codepeek.us21.list-manage.com/subscribe/post?u=749037629fe0881d124334024&amp;id=60232e9787&amp;f_id=009aaee1f0"
      method="post"
      className="flex flex-col sm:flex-row w-full max-w-4xl mx-auto items-center gap-2"
    >
      <input
        type="email"
        name="EMAIL"
        placeholder="Seu email principal"
        required
        id="mce-EMAIL"
        className="text-black focus:outline-none h-14 w-full rounded-md px-2"
      />
      <button
        type="submit"
        className="h-14 w-full sm:w-52 border-0 rounded-md bg-yellow text-white text-md font-bold flex items-center justify-center hover:opacity-90 transition-color"
      >
        Inscrever-se
      </button>
    </form>
  );
}
