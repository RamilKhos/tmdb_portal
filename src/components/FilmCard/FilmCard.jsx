export const FilmCard = ({ props }) => {
  console.log(props);

  return (
    <section className="content">
      <div className="content__inner">

        <div className="card__wrapper">
          <div className="card__poster">
            <img className="card__images" src="#" alt="poster-films" />
          </div>
          <div className="card__vote-average">6.7</div>
          <div className="card__title">The Flash</div>
          <div className="card__release">12.12.1992</div>
        </div>

      </div>
    </section>
  );
};
