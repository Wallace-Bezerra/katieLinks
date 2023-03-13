import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "./Styled";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slide() {
  return (
    <Container>
      <h2>Links</h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.1}
        width={340}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          700: {
            slidesPerView: 1.5,
            width: 440,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.tiktok.com/@rafaelinhamonteiro" target="_blank">
            <img src="/card1.png" alt="card tiktok" />
          </a>
          <div className="content">
            <h3>@rafaelinhamonteiro</h3>
            <p>TikTok + 300K</p>
            <div className="follow">
              <a
                href="https://www.tiktok.com/@rafaelinhamonteiro"
                target="_blank"
              >
                Follow me
              </a>
              <a
                href="https://www.tiktok.com/@rafaelinhamonteiro"
                target="_blank"
              >
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2842 14.0402V14.0271C23.1402 12.8145 21.5413 12.0713 19.7603 12.0713C16.3154 12.0713 13.5205 14.8747 13.5205 18.33C13.5205 19.9338 14.1315 21.3942 15.1195 22.5025C16.2634 23.7803 17.9144 24.5887 19.7603 24.5887C23.2052 24.5887 26.0002 21.7853 26.0002 18.33C26.0002 16.674 25.3502 15.1615 24.2842 14.0402ZM22.0873 19.3862H20.7353V20.8074C20.7353 21.342 20.2933 21.7853 19.7603 21.7853C19.2274 21.7853 18.7854 21.342 18.7854 20.8074V19.3862H17.4334C16.8874 19.3862 16.4584 18.9559 16.4584 18.4082C16.4584 17.8736 16.8744 17.4433 17.4204 17.4303H18.7854V16.1264C18.7854 16.1003 18.7854 16.0742 18.7984 16.0482C18.8244 15.5527 19.2534 15.1485 19.7603 15.1485C20.2803 15.1485 20.7093 15.5657 20.7353 16.0873V17.4303H22.0873C22.6333 17.4303 23.0622 17.8736 23.0622 18.4082C23.0622 18.9559 22.6333 19.3862 22.0873 19.3862Z"
                    fill="#FF0054"
                  />
                  <path
                    d="M25.9993 7.28881C25.9993 8.84046 25.7523 10.2747 25.3233 11.6047C25.2453 11.8785 24.9203 11.9568 24.6863 11.7873C23.2694 10.7311 21.5404 10.1704 19.7595 10.1704C15.2486 10.1704 11.5697 13.8605 11.5697 18.385C11.5697 19.7932 11.9337 21.1754 12.6227 22.401C12.8307 22.7661 12.5837 23.2355 12.1937 23.0921C9.06075 22.0229 2.72993 18.1242 0.675982 11.6047C0.246993 10.2747 0 8.84046 0 7.28881C0 3.25975 3.23691 0 7.2278 0C9.58074 0 11.6867 1.14742 12.9996 2.90769C14.3126 1.14742 16.4186 0 18.7715 0C22.7624 -1.3039e-05 25.9993 3.25975 25.9993 7.28881Z"
                    fill="#FF0054"
                  />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            href="https://www.instagram.com/rafaelinha_monteiro/"
          >
            <img src="/card2.png" alt="card instagram" />
          </a>
          <div className="content">
            <h3>@rafaelinha_monteiro</h3>
            <p>Instagram + 190 K</p>
            <div className="follow">
              <a
                target="_blank"
                href="https://www.instagram.com/rafaelinha_monteiro/"
              >
                Follow me
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/rafaelinha_monteiro/"
              >
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2842 14.0402V14.0271C23.1402 12.8145 21.5413 12.0713 19.7603 12.0713C16.3154 12.0713 13.5205 14.8747 13.5205 18.33C13.5205 19.9338 14.1315 21.3942 15.1195 22.5025C16.2634 23.7803 17.9144 24.5887 19.7603 24.5887C23.2052 24.5887 26.0002 21.7853 26.0002 18.33C26.0002 16.674 25.3502 15.1615 24.2842 14.0402ZM22.0873 19.3862H20.7353V20.8074C20.7353 21.342 20.2933 21.7853 19.7603 21.7853C19.2274 21.7853 18.7854 21.342 18.7854 20.8074V19.3862H17.4334C16.8874 19.3862 16.4584 18.9559 16.4584 18.4082C16.4584 17.8736 16.8744 17.4433 17.4204 17.4303H18.7854V16.1264C18.7854 16.1003 18.7854 16.0742 18.7984 16.0482C18.8244 15.5527 19.2534 15.1485 19.7603 15.1485C20.2803 15.1485 20.7093 15.5657 20.7353 16.0873V17.4303H22.0873C22.6333 17.4303 23.0622 17.8736 23.0622 18.4082C23.0622 18.9559 22.6333 19.3862 22.0873 19.3862Z"
                    fill="#FF0054"
                  />
                  <path
                    d="M25.9993 7.28881C25.9993 8.84046 25.7523 10.2747 25.3233 11.6047C25.2453 11.8785 24.9203 11.9568 24.6863 11.7873C23.2694 10.7311 21.5404 10.1704 19.7595 10.1704C15.2486 10.1704 11.5697 13.8605 11.5697 18.385C11.5697 19.7932 11.9337 21.1754 12.6227 22.401C12.8307 22.7661 12.5837 23.2355 12.1937 23.0921C9.06075 22.0229 2.72993 18.1242 0.675982 11.6047C0.246993 10.2747 0 8.84046 0 7.28881C0 3.25975 3.23691 0 7.2278 0C9.58074 0 11.6867 1.14742 12.9996 2.90769C14.3126 1.14742 16.4186 0 18.7715 0C22.7624 -1.3039e-05 25.9993 3.25975 25.9993 7.28881Z"
                    fill="#FF0054"
                  />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://m.kwai.com/user/150000253813137" target="_blank">
            <img src="/card3.png" alt="card kwai" />
          </a>
          <div className="content">
            <h3>rafaelinhamonteiro</h3>
            <p>Kwai + 120 K</p>
            <div className="follow">
              <a href="https://m.kwai.com/user/150000253813137" target="_blank">
                Follow me
              </a>
              <a href="https://m.kwai.com/user/150000253813137" target="_blank">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2842 14.0402V14.0271C23.1402 12.8145 21.5413 12.0713 19.7603 12.0713C16.3154 12.0713 13.5205 14.8747 13.5205 18.33C13.5205 19.9338 14.1315 21.3942 15.1195 22.5025C16.2634 23.7803 17.9144 24.5887 19.7603 24.5887C23.2052 24.5887 26.0002 21.7853 26.0002 18.33C26.0002 16.674 25.3502 15.1615 24.2842 14.0402ZM22.0873 19.3862H20.7353V20.8074C20.7353 21.342 20.2933 21.7853 19.7603 21.7853C19.2274 21.7853 18.7854 21.342 18.7854 20.8074V19.3862H17.4334C16.8874 19.3862 16.4584 18.9559 16.4584 18.4082C16.4584 17.8736 16.8744 17.4433 17.4204 17.4303H18.7854V16.1264C18.7854 16.1003 18.7854 16.0742 18.7984 16.0482C18.8244 15.5527 19.2534 15.1485 19.7603 15.1485C20.2803 15.1485 20.7093 15.5657 20.7353 16.0873V17.4303H22.0873C22.6333 17.4303 23.0622 17.8736 23.0622 18.4082C23.0622 18.9559 22.6333 19.3862 22.0873 19.3862Z"
                    fill="#FF0054"
                  />
                  <path
                    d="M25.9993 7.28881C25.9993 8.84046 25.7523 10.2747 25.3233 11.6047C25.2453 11.8785 24.9203 11.9568 24.6863 11.7873C23.2694 10.7311 21.5404 10.1704 19.7595 10.1704C15.2486 10.1704 11.5697 13.8605 11.5697 18.385C11.5697 19.7932 11.9337 21.1754 12.6227 22.401C12.8307 22.7661 12.5837 23.2355 12.1937 23.0921C9.06075 22.0229 2.72993 18.1242 0.675982 11.6047C0.246993 10.2747 0 8.84046 0 7.28881C0 3.25975 3.23691 0 7.2278 0C9.58074 0 11.6867 1.14742 12.9996 2.90769C14.3126 1.14742 16.4186 0 18.7715 0C22.7624 -1.3039e-05 25.9993 3.25975 25.9993 7.28881Z"
                    fill="#FF0054"
                  />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://twitter.com/rafaelinhamont" target="_blank">
            <img src="/card4.png" alt="card twitter" />
          </a>
          <div className="content">
            <h3>@rafaelinhamont</h3>
            <p>Twitter + 2.6 K</p>
            <div className="follow">
              <a href="https://twitter.com/rafaelinhamont" target="_blank">
                Follow me
              </a>
              <a href="https://twitter.com/rafaelinhamont" target="_blank">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2842 14.0402V14.0271C23.1402 12.8145 21.5413 12.0713 19.7603 12.0713C16.3154 12.0713 13.5205 14.8747 13.5205 18.33C13.5205 19.9338 14.1315 21.3942 15.1195 22.5025C16.2634 23.7803 17.9144 24.5887 19.7603 24.5887C23.2052 24.5887 26.0002 21.7853 26.0002 18.33C26.0002 16.674 25.3502 15.1615 24.2842 14.0402ZM22.0873 19.3862H20.7353V20.8074C20.7353 21.342 20.2933 21.7853 19.7603 21.7853C19.2274 21.7853 18.7854 21.342 18.7854 20.8074V19.3862H17.4334C16.8874 19.3862 16.4584 18.9559 16.4584 18.4082C16.4584 17.8736 16.8744 17.4433 17.4204 17.4303H18.7854V16.1264C18.7854 16.1003 18.7854 16.0742 18.7984 16.0482C18.8244 15.5527 19.2534 15.1485 19.7603 15.1485C20.2803 15.1485 20.7093 15.5657 20.7353 16.0873V17.4303H22.0873C22.6333 17.4303 23.0622 17.8736 23.0622 18.4082C23.0622 18.9559 22.6333 19.3862 22.0873 19.3862Z"
                    fill="#FF0054"
                  />
                  <path
                    d="M25.9993 7.28881C25.9993 8.84046 25.7523 10.2747 25.3233 11.6047C25.2453 11.8785 24.9203 11.9568 24.6863 11.7873C23.2694 10.7311 21.5404 10.1704 19.7595 10.1704C15.2486 10.1704 11.5697 13.8605 11.5697 18.385C11.5697 19.7932 11.9337 21.1754 12.6227 22.401C12.8307 22.7661 12.5837 23.2355 12.1937 23.0921C9.06075 22.0229 2.72993 18.1242 0.675982 11.6047C0.246993 10.2747 0 8.84046 0 7.28881C0 3.25975 3.23691 0 7.2278 0C9.58074 0 11.6867 1.14742 12.9996 2.90769C14.3126 1.14742 16.4186 0 18.7715 0C22.7624 -1.3039e-05 25.9993 3.25975 25.9993 7.28881Z"
                    fill="#FF0054"
                  />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.youtube.com/@rafaelinha_monteiro"
            target="_blank"
          >
            <img src="/card5.png" alt="card youtube" />
          </a>
          <div className="content">
            <h3>@rafaelinha_monteiro</h3>
            <p>Youtube + 1.22 K</p>
            <div className="follow">
              <a
                href="https://www.youtube.com/@rafaelinha_monteiro"
                target="_blank"
              >
                Follow me{" "}
              </a>
              <a
                href="https://www.youtube.com/@rafaelinha_monteiro"
                target="_blank"
              >
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24.2842 14.0402V14.0271C23.1402 12.8145 21.5413 12.0713 19.7603 12.0713C16.3154 12.0713 13.5205 14.8747 13.5205 18.33C13.5205 19.9338 14.1315 21.3942 15.1195 22.5025C16.2634 23.7803 17.9144 24.5887 19.7603 24.5887C23.2052 24.5887 26.0002 21.7853 26.0002 18.33C26.0002 16.674 25.3502 15.1615 24.2842 14.0402ZM22.0873 19.3862H20.7353V20.8074C20.7353 21.342 20.2933 21.7853 19.7603 21.7853C19.2274 21.7853 18.7854 21.342 18.7854 20.8074V19.3862H17.4334C16.8874 19.3862 16.4584 18.9559 16.4584 18.4082C16.4584 17.8736 16.8744 17.4433 17.4204 17.4303H18.7854V16.1264C18.7854 16.1003 18.7854 16.0742 18.7984 16.0482C18.8244 15.5527 19.2534 15.1485 19.7603 15.1485C20.2803 15.1485 20.7093 15.5657 20.7353 16.0873V17.4303H22.0873C22.6333 17.4303 23.0622 17.8736 23.0622 18.4082C23.0622 18.9559 22.6333 19.3862 22.0873 19.3862Z" />
                  <path d="M25.9993 7.28881C25.9993 8.84046 25.7523 10.2747 25.3233 11.6047C25.2453 11.8785 24.9203 11.9568 24.6863 11.7873C23.2694 10.7311 21.5404 10.1704 19.7595 10.1704C15.2486 10.1704 11.5697 13.8605 11.5697 18.385C11.5697 19.7932 11.9337 21.1754 12.6227 22.401C12.8307 22.7661 12.5837 23.2355 12.1937 23.0921C9.06075 22.0229 2.72993 18.1242 0.675982 11.6047C0.246993 10.2747 0 8.84046 0 7.28881C0 3.25975 3.23691 0 7.2278 0C9.58074 0 11.6867 1.14742 12.9996 2.90769C14.3126 1.14742 16.4186 0 18.7715 0C22.7624 -1.3039e-05 25.9993 3.25975 25.9993 7.28881Z" />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}