import React from 'react';
import Navbar from '../../components/Navbar';

function index() {
  return (
    <>
      <Navbar />
      <div>
        <p>Info Page</p>
      </div>
    </>
  );
}

export default index;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}