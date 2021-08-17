export default function ContactForm() {
  return (
    <div className="container grid items-center md:grid-cols-2 gap-24 sections-spacing">
      <form
        data-netlify="true"
        name="contact"
        method="POST"
        action="/?contact=true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className="block pt-8">
          <p className="font-bold">Name:</p>
          <input
            name="name"
            type="text"
            required
            className="mt-2 input w-full"
          />
        </label>
        <label className="block pt-8">
          <p className="font-bold">Email:</p>
          <input
            name="email"
            type="email"
            required
            className="mt-2 input w-full"
          />
        </label>
        <label className="block pt-8">
          <p className="font-bold">Message:</p>
          <textarea
            name="message"
            rows={7}
            required
            className="mt-2 input w-full"
          ></textarea>
        </label>
        <div className="block pt-8">
          <button type="submit" className="button ml-auto">
            Submit
          </button>
        </div>
      </form>
      <img
        className="hidden shadow-none md:block"
        src="/assets/contact.svg"
        alt="Contact image."
      />
    </div>
  )
}
