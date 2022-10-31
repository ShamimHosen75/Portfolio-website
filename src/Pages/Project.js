const Project = ({ project }) => {
  console.log(project);
  const { name, image, description, links } = project || {};
  return (
    <div class="card w-full bg-base-300 shadow-3xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-between mt-7">
          <a
            className="btn btn-sm btn-primary w-24 mr-3 text-white"
            href={links[0].url}
            target="_blank"
            rel="noreferrer"
          >
            <p>Live Site</p>
          </a>
          <button class="btn btn-sm btn-info w-24">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
