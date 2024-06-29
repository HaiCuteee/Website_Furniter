import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import style from './footer.module.css';
import classNames from "classnames/bind";
const cx = classNames.bind(style);


function Footer() {
  return (
    <MDBFooter bgColor='light' className={cx('text-center', 'text-lg-start', 'footer')}>
      <section className={cx('d-flex', 'justify-content-center', 'justify-content-lg-between', 'p-4', 'border-bottom')}>
        <div className={cx('me-5', 'd-none', 'd-lg-block')}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className={cx('ml-4', 'text-reset')}>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className={cx('text-center', 'text-md-start', 'mt-5')}>
          <MDBRow className={cx('mt-3')}>
            <MDBCol md='3' lg='4' xl='3' className={cx('mx-auto', 'mb-4')}>
              <h6 className={cx('text-uppercase', 'fw-bold', 'mb-4')}>
                <MDBIcon color='secondary' icon='gem' className={cx('me-3')} />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className={cx('mx-auto', 'mb-4')}>
              <h6 className={cx('text-uppercase', 'fw-bold', 'mb-4')}>Products</h6>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className={cx('mx-auto', 'mb-4')}>
              <h6 className={cx('text-uppercase', 'fw-bold', 'mb-4')}>Useful links</h6>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className={cx('text-reset')}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className={cx('mx-auto', 'mb-md-0', 'mb-4')}>
              <h6 className={cx('text-uppercase', 'fw-bold', 'mb-4')}>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className={cx('me-2')} />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className={cx('me-3')} />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className={cx('me-3')} /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className={cx('me-3')} /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className={cx('text-center', 'p-4')}>
        © 2021 Copyright:
        <a className={cx('text-reset', 'fw-bold')} href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;