import $ from 'jquery';
import store from '../store';
import { signOut, twitterAuth, facebookAuth, googleAuth, githubAuth } from '../auth';

const root = document.querySelector('.right > li');
const element = document.createElement('button');
element.classList.add('btn', 'waves-effect', 'waves-light');
element.setAttribute('id', 'auth');
root.appendChild(element);

const google = document.querySelector('[provider=google]');
const facebook = document.querySelector('[provider=facebook]');
const github = document.querySelector('[provider=github]');
const twitter = document.querySelector('[provider=twitter]');

google.addEventListener('click', googleAuth);
facebook.addEventListener('click', facebookAuth);
github.addEventListener('click', githubAuth);
twitter.addEventListener('click', twitterAuth);

export default function listener() {
  const { user } = store.getState();
  if (user !== null) {
    element.innerHTML = 'Sign out';
  } else {
    element.innerHTML = 'Sign in';
  }
}

element.addEventListener('click', () => {
  const { user } = store.getState();
  if (user !== null) {
    signOut();
  } else {
    $('#signin-modal').modal('open');
  }
});
