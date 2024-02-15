function HomePage({ dispatch }) {
  return (
    <>
      <section className='section__homepage'>
        <div className='section__homepage-item1'>
          <h3 className='heading__primary'>Welcome to the</h3>
          <h3 className='heading__secondary'>Frontend Quiz!</h3>
          <p className='paragraph__primary'>Pick a subject to get started</p>
        </div>

        <div className='section__homepage-item2'>
          <button
            className='btn-homepage__box'
            onClick={() => dispatch({ type: 'start' })}
          >
            <div className='childrenBox'>
              <div className='x'>
                <div>
                  <img
                    src='../icon-html.svg'
                    alt='html'
                    className='image-homepage'
                  />
                </div>
              </div>
              <p className='paragraph__secondary'>HTML</p>
            </div>
          </button>

          <button
            className='btn-homepage__box'
            onClick={() => dispatch({ type: 'startCSS' })}
          >
            <div className='childrenBox'>
              <div className='x'>
                <div>
                  <img
                    src='../icon-css.svg'
                    alt='html'
                    className='image-homepage--css'
                  />
                </div>
              </div>
              <p className='paragraph__secondary'>CSS</p>
            </div>
          </button>

          <button
            className='btn-homepage__box'
            onClick={() => dispatch({ type: 'startJS' })}
          >
            <div className='childrenBox'>
              <div className='x'>
                <div>
                  <img
                    src='../icon-js.svg'
                    alt='html'
                    className='image-homepage--js'
                  />
                </div>
              </div>
              <p className='paragraph__secondary'>Javascript</p>
            </div>
          </button>

          <button
            className='btn-homepage__box'
            onClick={() => dispatch({ type: 'startAccessibility' })}
          >
            <div className='childrenBox'>
              <div className='x'>
                <div>
                  <img
                    src='../icon-accessibility.svg'
                    alt='html'
                    className='image-homepage--acc'
                  />
                </div>
              </div>
              <p className='paragraph__secondary'>Acessibility</p>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
