const ExtensionCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="m-2 mx-8 mb-4 items-center  rounded-xl border border-gray-500 bg-primary bg-gradient-to-br py-4 text-center text-xl font-semibold shadow-lg transition hover:bg-secondary hover:shadow-lg lg:w-80 lg:py-6 lg:text-3xl xxs:px-16">
    <a className="capitalize text-white">{name}</a>
  </div>
)

export default ExtensionCard
