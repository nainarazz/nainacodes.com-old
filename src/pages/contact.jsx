/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Layout from '../layout/index.component';
import themeColor from '../config/theme';

const { color } = themeColor;

export const Contact = () => {
  return (
    <Layout>
      <h1 style={{ marginBottom: '0.5rem', color: color.red }}>Don&apos;t be a stranger,</h1>
      <h2 style={{ margin: '0 0 3rem' }}>just say hello 👋</h2>
      <p>
        If you want to share some of your thoughts with me, or simply wanna talk, feel free to do
        so.
      </p>
      <p>I would love to connect with you! ❤️</p>
      <h3>Me around the web</h3>
      <ul>
        <li>
          Github: <a href="https://github.com/nainarazz">nainarazz</a>
        </li>
        <li>
          LinkedIn: <a href="https://linkedin.com/in/nainarazz">nainarazz</a>
        </li>
        <li>
          Twitter: <a href="https://twitter.com/nr_razz">nr_razz</a>
        </li>
        <li>
          Email:{' '}
          <a href="mailto:&#110;&#97;&#105;&#110;&#97;&#114;&#97;&#122;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
            naina razafindrabiby
          </a>
        </li>
        <li>
          Resume:{' '}
          <a href="https://docs.google.com/document/d/1SX8ou3-uwcEK0hTY4cch4gL3dQWmbG_YjlPdoqYWSS4/edit?usp=sharing">
            naina razafindrabiby
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Contact;
