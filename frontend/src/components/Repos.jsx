import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth }) => {
  const fullWidth = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";
  return (
    <div className={`${fullWidth} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-500">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && <p className="flex items-center justify-center h-32 ">No repos found</p>}
      </ol>
    </div>
  );
};

export default Repos;
