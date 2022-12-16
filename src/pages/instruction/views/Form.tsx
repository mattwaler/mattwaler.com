export default function InstructionForm() {
  return (
    <section id="schedule" className="section-spacing border-t">
      <div className="container">
        <div className="lg:text-center">
          <h3 className="font-bold text-3xl">Let's Get Started</h3>
          <p className="mt-2 text-lg">
            Fill out and submit the form below and we can start building cool
            stuff together.
          </p>
        </div>
        <form
          data-netlify="true"
          name="schedule"
          className="mt-16 grid grid-cols-2 gap-8 max-w-4xl mx-auto"
          method="POST"
          action="/?contact=true"
        >
          <input type="hidden" name="form-name" value="schedule" />
          <label className="col-span-2 sm:col-span-1">
            <span className="block">Name:</span>
            <input className="input w-full" type="text" name="name" />
          </label>
          <label className="col-span-2 sm:col-span-1">
            <span className="block">Email:</span>
            <input className="input w-full" type="email" name="email" />
          </label>
          <label className="col-span-2">
            <span className="block">Session Type:</span>
            <select id="instruction-type" className="input w-full" name="type">
              <option value="meet">FREE Meet & Greet (15 Minutes)</option>
              <option value="session">
                Pair Programming Session (45 Minutes)
              </option>
            </select>
          </label>
          <label className="col-span-2">
            <span className="block">Extra Information:</span>
            <textarea
              className="input w-full"
              name="info"
              cols={30}
              rows={10}
            ></textarea>
          </label>
          <button type="submit" className="button col-span-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
