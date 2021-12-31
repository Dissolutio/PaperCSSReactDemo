import 'papercss/dist/paper.css';

export const PaperCSS = () => {
  return (
    <>
      <Alerts />
      <Articles />
      <Badges />
      <Breadcrumb />
      <Buttons />
      <Cards />
      <Collapsibles />
      <Forms />
      <Modals />
      <Navbar />
      <Popovers />
      <Progress />
      <Tabs />
    </>
  );
};

const Alerts = () => {
  return (
    <div className="row flex-spaces">
      <h2>Alerts</h2>
      <div className="alert alert-primary">Alert-primary</div>
      <div className="alert alert-secondary">Alert-secondary</div>
      <div className="alert alert-success">Alert-success</div>
      <div className="alert alert-warning">Alert-warning</div>
      <div className="alert alert-danger">Alert-danger</div>
      <h2>Alerts (dismissable)</h2>
      <input className="alert-state" id="alert-1" type="checkbox" />
      <div className="alert alert-primary dismissible">
        Alert-primary
        <label className="btn-close" htmlFor="alert-1">
          X
        </label>
      </div>
      <input className="alert-state" id="alert-2" type="checkbox" />
      <div className="alert alert-secondary dismissible">
        Alert-secondary
        <label className="btn-close" htmlFor="alert-2">
          X
        </label>
      </div>
      <input className="alert-state" id="alert-3" type="checkbox" />
      <div className="alert alert-success dismissible">
        Alert-success
        <label className="btn-close" htmlFor="alert-3">
          X
        </label>
      </div>
      <input className="alert-state" id="alert-4" type="checkbox" />
      <div className="alert alert-warning dismissible">
        Alert-warning
        <label className="btn-close" htmlFor="alert-4">
          X
        </label>
      </div>
      <input className="alert-state" id="alert-5" type="checkbox" />
      <div className="alert alert-danger dismissible">
        Alert-danger
        <label className="btn-close" htmlFor="alert-5">
          X
        </label>
      </div>
    </div>
  );
};
const Articles = () => {
  return (
    <>
      <h2>Articles</h2>
      <article className="article">
        <h1 className="article-title">
          <a href="">Article Title</a>
        </h1>
        <p className="article-meta">
          Written by <a href="#">Super User</a>
        </p>
        <p className="text-lead"> Lorem... </p>
        <p>Lorem...</p>

        <div className="row">
          <button>Read More</button>
          <button>5 Comments</button>
        </div>
      </article>
    </>
  );
};
const Badges = () => {
  return (
    <>
      <h2>Badges</h2>
      <h1>
        Example h1 heading <span className="badge">123</span>
      </h1>
      <h2>
        Example h2 heading <span className="badge secondary">123</span>
      </h2>
      <h3>
        Example h3 heading <span className="badge success">123</span>
      </h3>
      <h4>
        Example h4 heading <span className="badge warning">123</span>
      </h4>
      <h5>
        Example h5 heading <span className="badge danger">123</span>
      </h5>
      <h6>
        Example h6 heading <span className="badge">123</span>
      </h6>
    </>
  );
};
const Breadcrumb = () => {
  return (
    <>
      <h2>Breadcrumb</h2>
      <ul className="breadcrumb border">
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li>Breadcrumb</li>
      </ul>
    </>
  );
};
const Buttons = () => {
  return (
    <>
      <h2>Buttons</h2>
      <button className="btn-large">Large</button>
      <button>Default</button>
      <button className="btn-small">Small</button>
      <a href="#" className="paper-btn">
        Link
      </a>
      <div className="row">
        <div className="col-6 col">
          <button className="btn-block">Block level</button>
        </div>
      </div>
      <button className="disabled">Disabled</button>
      <button disabled>Disabled</button>
      <input type="button" className="paper-btn btn-primary" value="Primary" />
      <input type="button" className="btn-secondary" value="Secondary" />
      <button className="btn-success">Success</button>
      <button className="btn-warning">Warning</button>
      <button className="btn-danger">Danger</button>
      <input
        type="button"
        className="paper-btn btn-primary-outline"
        value="Primary"
      />
      <input
        type="button"
        className="btn-secondary-outline"
        value="Secondary"
      />
      <button className="btn-success-outline">Success</button>
      <button className="btn-warning-outline">Warning</button>
      <a href="#" className="paper-btn btn-danger-outline">
        Danger
      </a>
    </>
  );
};
const Cards = () => {
  return (
    <>
      <h2>Cards</h2>
      <div className="card" style={{ width: '20rem' }}>
        <img src="https://picsum.photos/768" alt="Card example image" />

        <div className="card-body">
          <h4 className="card-title">My awesome Paper card!</h4>
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">
            Notice that the card width in this example have been set to 20rem,
            otherwise it will try to fill the current container/row where the
            card is.
          </p>
          <button>Let me go here!</button>
        </div>
      </div>
      <div className="card" style={{ width: '20rem' }}>
        <div className="card-body">
          <h4 className="card-title">My awesome Paper card!</h4>
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">
            This is another example of a card without image. Cards are also
            meant to be used without images, but with text/links/buttons.
          </p>
          <a className="card-link" href="#">
            First link
          </a>
          <a className="card-link" href="#">
            Second link
          </a>
        </div>
      </div>
      <div className="card" style={{ width: '20rem' }}>
        <div className="card-body">
          <h4 className="card-title">My awesome Paper card!</h4>
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">
            You can also place image on the bottom of the card.
          </p>
          <button>Let me go here!</button>
        </div>
        <img
          className="image-bottom"
          src="https://unsplash.it/550/250"
          alt="Card example image"
        />
      </div>
      <div className="card" style={{ width: '20rem' }}>
        <img
          className="image-top"
          src="https://unsplash.it/550/250"
          alt="Card example image"
        />
        <div className="card-body">
          <h4 className="card-title">My awesome Paper card!</h4>
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">
            You can also place image on the bottom of the card.
          </p>
          <button>Let me go here!</button>
        </div>
      </div>

      <div className="card" style={{ width: '20rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">My awesome Paper card!</h4>
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">
            You can also place image on the bottom of the card.
          </p>
          <button>Let me go here!</button>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    </>
  );
};
const Collapsibles = () => {
  return (
    <>
      <h2>Collapsibles</h2>
      <div className="row">
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible" />
          <label htmlFor="collapsible1">First</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
              drumstick fatback boudin ball tip turducken...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible2" type="checkbox" name="collapsible" />
          <label htmlFor="collapsible2">Second</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
              Sausage pig leberkas, t-bone sirloin shoulder bresaola...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible3" type="checkbox" name="collapsible" />
          <label htmlFor="collapsible3">Third</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
              drumstick fatback boudin ball tip turducken...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible4" type="checkbox" name="collapsible" />
          <label htmlFor="collapsible4">Fourth</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
              Sausage pig leberkas, t-bone sirloin shoulder bresaola...
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="collapsible">
          <input id="collapsible5" type="radio" name="collapsible" />
          <label htmlFor="collapsible5">First</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
              drumstick fatback boudin ball tip turducken...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible6" type="radio" name="collapsible" />
          <label htmlFor="collapsible6">Second</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
              Sausage pig leberkas, t-bone sirloin shoulder bresaola...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible7" type="radio" name="collapsible" />
          <label htmlFor="collapsible7">Third</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky
              drumstick fatback boudin ball tip turducken...
            </span>
          </div>
        </div>
        <div className="collapsible">
          <input id="collapsible8" type="radio" name="collapsible" />
          <label htmlFor="collapsible8">Fourth</label>
          <div className="collapsible-body">
            <span>
              Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
              Sausage pig leberkas, t-bone sirloin shoulder bresaola...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
const Forms = () => {
  return (
    <>
      <h2>Forms</h2>
      <div className="form-group">
        <label htmlFor="paperInputs1">Input</label>
        <input type="text" placeholder="Nice input" id="paperInputs1" />
      </div>
      <div className="row">
        <div className="col sm-4">
          <div className="form-group">
            <label htmlFor="paperInputs2">Block Level</label>
            <input className="input-block" type="text" id="paperInputs2" />
          </div>
        </div>
        <div className="col sm-8">
          <div className="form-group">
            <label htmlFor="paperInputs3">Block Level</label>
            <input className="input-block" type="text" id="paperInputs3" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="paperInputs4">Disabled</label>
        <input type="text" placeholder="Disabled" id="paperInputs4" disabled />
      </div>
      <div className="form-group">
        <label htmlFor="large-input">Large Input</label>
        <textarea id="large-input" placeholder="Large input"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="no-resize">No Resize</label>
        <textarea
          className="no-resize"
          id="no-resize"
          placeholder="No resize"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="paperSelects1">Select</label>
        <select id="paperSelects1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <fieldset className="form-group">
        <legend>Some Radio Buttons</legend>
        <label htmlFor="paperRadios1" className="paper-radio">
          <input
            type="radio"
            name="paperRadios"
            id="paperRadios1"
            value="option 1"
          />{' '}
          <span>This is the first option</span>
        </label>
        <label htmlFor="paperRadios2" className="paper-radio">
          <input
            type="radio"
            name="paperRadios"
            id="paperRadios2"
            value="option 2"
          />{' '}
          <span>This is the second option</span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <legend>Some Check Boxes</legend>
        <label htmlFor="paperChecks1" className="paper-check">
          <input
            type="checkbox"
            name="paperChecks"
            id="paperChecks1"
            value="option 1"
          />{' '}
          <span>This is the first check</span>
        </label>
        <label htmlFor="paperChecks2" className="paper-check">
          <input
            type="checkbox"
            name="paperChecks"
            id="paperChecks2"
            value="option 2"
          />{' '}
          <span>This is the second check</span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <legend>Some Switch</legend>
        <p>Default - standard outline style (square & circle)</p>
        <label className="paper-switch">
          <input id="paperSwitch4" name="paperSwitch4" type="checkbox" />
          <span className="paper-switch-slider"></span>
        </label>
        <label htmlFor="paperSwitch4" className="paper-switch-label">
          Square switch
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="paperSwitch5" className="paper-switch-label">
          Square switch
        </label>
        <label className="paper-switch">
          <input
            id="paperSwitch5"
            name="paperSwitch5"
            type="checkbox"
            defaultChecked
          />
          <span className="paper-switch-slider"></span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label className="paper-switch">
          <input
            id="paperSwitch6"
            name="paperSwitch6"
            type="checkbox"
            defaultChecked
          />
          <span className="paper-switch-slider round"></span>
        </label>
        <label htmlFor="paperSwitch6" className="paper-switch-label">
          Circle switch
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="paperSwitch7" className="paper-switch-label">
          Circle switch
        </label>
        <label className="paper-switch">
          <input id="paperSwitch7" name="paperSwitch7" type="checkbox" />
          <span className="paper-switch-slider round"></span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <p>Type2 - inline style (square & circle)</p>
        <label className="paper-switch-2">
          <input
            id="paperSwitch8"
            name="paperSwitch8"
            type="checkbox"
            defaultChecked
          />
          <span className="paper-switch-slider"></span>
        </label>
        <label htmlFor="paperSwitch8" className="paper-switch-2-label">
          Square switch
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="paperSwitch9" className="paper-switch-2-label">
          Square switch
        </label>
        <label className="paper-switch-2">
          <input id="paperSwitch9" name="paperSwitch9" type="checkbox" />
          <span className="paper-switch-slider"></span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label className="paper-switch-2">
          <input id="paperSwitch10" name="paperSwitch10" type="checkbox" />
          <span className="paper-switch-slider round"></span>
        </label>
        <label htmlFor="paperSwitch10" className="paper-switch-2-label">
          Circle switch
        </label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="paperSwitch11" className="paper-switch-2-label">
          Circle switch
        </label>
        <label className="paper-switch-2">
          <input
            id="paperSwitch11"
            name="paperSwitch11"
            type="checkbox"
            defaultChecked
          />
          <span className="paper-switch-slider round"></span>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <p>Type3 - Tile style</p>
        <label htmlFor="paperSwitch1" className="paper-switch-tile">
          <input id="paperSwitch1" name="paperSwitch1" type="checkbox" />
          <div className="paper-switch-tile-card border">
            <div className="paper-switch-tile-card-front border">Front</div>
            <div className="paper-switch-tile-card-back border background-primary">
              Back
            </div>
          </div>
        </label>
        <label htmlFor="paperSwitch2" className="paper-switch-tile">
          <input id="paperSwitch2" name="paperSwitch2" type="checkbox" />
          <div className="paper-switch-tile-card border">
            <div className="paper-switch-tile-card-front border background-warning">
              Off
            </div>
            <div className="paper-switch-tile-card-back border background-secondary">
              On
            </div>
          </div>
        </label>
        <label htmlFor="paperSwitch3" className="paper-switch-tile">
          <input id="paperSwitch3" name="paperSwitch3" type="checkbox" />
          <div className="paper-switch-tile-card border">
            <div className="paper-switch-tile-card-front border background-danger">
              Declined
            </div>
            <div className="paper-switch-tile-card-back border background-success">
              Accepted
            </div>
          </div>
        </label>
      </fieldset>
      <fieldset className="form-group">
        <legend>Sliders</legend>
        <div className="form-group">
          <label htmlFor="input-range">Note /10 :</label>
          <input type="range" name="note" id="input-range" min="0" max="10" />
        </div>
        <div className="form-group">
          <label htmlFor="percentage">
            Percentage (<code>.input-block</code>) :
          </label>
          <input
            className="input-block"
            type="range"
            name="percentage"
            id="percentage"
            min="0"
            max="100"
            // onInput="output.value = this.value + '%';"
          />
          <output id="output" htmlFor="percentage">
            50%
          </output>
        </div>
      </fieldset>
    </>
  );
};
const Modals = () => {
  return (
    <>
      <h2>Modals</h2>
      <div className="row flex-spaces child-borders">
        <label className="paper-btn margin" htmlFor="modal-1">
          Open Modal!
        </label>
      </div>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-1">
            X
          </label>
          <h4 className="modal-title">Modal Title</h4>
          <h5 className="modal-subtitle">Modal Subtitle</h5>
          <p className="modal-text">
            This is an example of modal which is implemented with pure CSS! :D
          </p>
          <label htmlFor="modal-1">Nice!</label>
        </div>
      </div>
      <div className="row flex-spaces child-borders">
        <label className="paper-btn margin" htmlFor="modal-2">
          Another Modal!
        </label>
      </div>
      <input className="modal-state" id="modal-2" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-2"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-2">
            X
          </label>
          <h4 className="modal-title">Modal Title</h4>
          <h5 className="modal-subtitle">Modal Subtitle</h5>
          <p className="modal-text">
            This is another example of modal which is implemented with pure CSS!
            :D
          </p>
          <a href="/#download">Get PaperCSS</a>
          <label htmlFor="modal-2" className="modal-link">
            Close
          </label>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  return (
    <>
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <a href="#">Get PaperCSS</a>
          </h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
const Popovers = () => {
  return (
    <>
      <h2>Popovers</h2>
      <p popover-left="Popover on left">Popover left position</p>
      <p popover-top="Popover on top">Popover top position</p>
      <p popover-bottom="Popover on bottom">Popover bottom position</p>
      <p popover-right="Popover on right">Popover right position</p>
      <button popover-top="Popover on top">
        Popover on top and on a button!
      </button>
    </>
  );
};
const Progress = () => {
  return (
    <>
      <h2>Progress</h2>
      <div class="row">
        <div class="progress margin-bottom">
          <div class="bar w-25">25%</div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar secondary w-40">40%</div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar success w-55">55%</div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar warning w-70">70%</div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar danger w-85">85%</div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar muted w-100">100%</div>
        </div>
      </div>
      <div class="row">
        <div class="progress margin-bottom">
          <div class="bar striped w-25"></div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar striped secondary w-40"></div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar striped success w-55"></div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar striped warning w-70"></div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar striped danger w-85"></div>
        </div>
        <div class="progress margin-bottom">
          <div class="bar striped muted w-100"></div>
        </div>
      </div>
    </>
  );
};
const Tabs = () => {
  return (
    <>
      <h2>Tabs</h2>
      <div class="row flex-spaces tabs">
        <input id="tab1" type="radio" name="tabs" defaultChecked />
        <label for="tab1">Tab 1</label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">Tab 2</label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">Tab 3</label>

        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4">Tab 4</label>

        <div class="content" id="content1">
          <p>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...</p>
          <p>Brisket meatball turkey short loin boudin leberkas meatloaf...</p>
        </div>
        <div class="content" id="content2">
          <p>Bacon ipsum dolor sit amet landjaeger sausage brisket...</p>
        </div>
        <div class="content" id="content3">
          <p>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...</p>
          <p>Brisket meatball turkey short loin boudin leberkas meatloaf...</p>
        </div>
        <div class="content" id="content4">
          <p>Bacon ipsum dolor sit amet landjaeger sausage brisket...</p>
        </div>
      </div>
    </>
  );
};
