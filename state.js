const PageState = function() {
    let currentState = new HomeState(this);

    this.init = function() {
        this.change(new HomeState);
    };

    this.change = function(state) {
        currentState = state;
    };
};

// Home State
const HomeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      </div>
      `;
};

// About State
const AboutState =  function(page) {
    document.querySelector('#heading').textContent = 'Welcome to the about page';
    document.querySelector('#content').innerHTML = 'About page';
};

// Contact State
const ContactState =  function(page) {
    document.querySelector('#heading').textContent = 'Contact us';
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>
    </form>
    `;
};

// Initialise Page State
const page =  new PageState;

// Init the first
page.init();

// UI Vars
const home = document.getElementById('home'),
      about =  document.getElementById('about'),
      contact =  document.getElementById('contact');
      
// Home
home.addEventListener('click', (e) => {
    page.change(new HomeState);
    e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
    page.change(new AboutState);
    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
    page.change(new ContactState);
    e.preventDefault();
});