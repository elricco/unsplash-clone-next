export default function Home({ photos }) {
  return (
    <div className="p-20">
      <div className="gap-10 col-count-1 md:col-count-2 lg:col-count-3" style={{ WebkitBackfaceVisibility: "hidden", WebkitColumnBreakInside: "avoid" }}>
        {photos.map(
          (photo) =>
            console.log(photo) || (
              <Image url={photo.file.url} key={photo.id} />
            )
        )}
      </div>
    </div>
  );
}

function Image({ url }) {
  return (
    <div className="pb-10">
      {/* image itself */}
      <div className="relative group">
        {/* image shadow */}
        <div className="absolute w-full h-full transition duration-200 transform bg-black rounded-lg -right-3 -bottom-3 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

        <img
          src={`http://localhost:1337${url}`}
          className="relative rounded-lg"
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/photos");
  const photos = await res.json();

  return { props: { photos } };
}
