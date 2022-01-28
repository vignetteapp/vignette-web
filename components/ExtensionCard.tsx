const ExtensionCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="m-2 mx-8 items-center rounded-xl bg-gray-100 bg-gradient-to-br from-iris-80 to-iris-60 px-32 py-4 text-center text-xl font-semibold text-white shadow-lg hover:bg-white hover:shadow-lg lg:w-80 lg:py-6 lg:text-3xl xxs:px-16">
    <a className="capitalize text-white hover:border-b">{name}</a>
  </div>
)

export default ExtensionCard
