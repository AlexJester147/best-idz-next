"use client";
import axios from "axios";
import { React, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);

  let token =
    "29c0e27329c0e27329c0e2735829b69e14229c029c0e27349edbc59806da71982dad23a"; // access_token - Как получить токен, описано в документации ВК
  let groupId = 187504726; // ID Группы
  let topicId = 39606501; // ID Топика
  let fetchUrl =
    "https://api.vk.com/method/board.getComments?group_id=" +
    groupId +
    "&topic_id=" +
    topicId +
    "&extended=1&offset=" +
    currentPage * 50 +
    "&sort=desc&v=5.95&access_token=" +
    token;

  const { isLoading, error, data, refetch } = useQuery(`reviews`, () =>
    axios.get(fetchUrl)
  );

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const pageCount = data && Math.ceil(data.data.response.count / 50);

  const formatDate = (initialDate) => {
    const date = new Date(initialDate * 1000);
    return date.toLocaleDateString("ru-RU");
  };

  const setProfileInfo = (from_id) => {
    const checkId = data.data.response.profiles.filter(
      (item) => item.id == from_id
    );
    const profileInfo = {
      image: checkId[0].photo_50,
      fullName: checkId[0].first_name + " " + checkId[0].last_name,
    };
    return profileInfo;
  };

  // if (currentPage > pageCount - 1) {
  //   return <ErrorPage />;
  // }

  return (
    <>
      {data && (
        <>
          <div className="review">
            <div className="review-link">
              <a
                href="https://vk.com/topic-187504726_39606501"
                className="button"
                target="_blank"
              >
                Написать отзыв
              </a>
            </div>
            <h2 className="review-count">
              {data && data.data.response.count} отзывов
            </h2>
            {data &&
              data.data.response.items.map((item) => (
                <div key={item.id} className="review-block">
                  <img
                    className="review-block__image"
                    src={setProfileInfo(item.from_id).image}
                    alt={setProfileInfo(item.from_id).fullName}
                  />
                  <div className="review-block__data-container">
                    <div className="review-block__wrapper">
                      <span className="review-block__author">
                        {setProfileInfo(item.from_id).fullName}
                      </span>
                      <span className="review-block__date">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <div className="review-block__text">{item.text}</div>
                    {item.attachments && (
                      <div className="review-attachments">
                        {item.attachments.map((attach) => {
                          if (attach.type == "sticker") {
                            return (
                              <img
                                key={attach.sticker.product_id}
                                src={
                                  attach.sticker.images[
                                    attach.sticker.images.length - 1
                                  ].url
                                }
                                alt="Sticker"
                                height={180}
                              />
                            );
                          } else {
                            return (
                              <img
                                key={attach.photo.id}
                                src={
                                  attach.photo.sizes[
                                    attach.photo.sizes.length - 1
                                  ].url
                                }
                                alt="Sticker"
                                height={180}
                              />
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <ReactPaginate
            previousLabel={"⇐"}
            nextLabel={"⇒"}
            breakLabel="..."
            pageCount={pageCount}
            initialPage={0}
            onPageChange={(e) => setCurrentPage(e.selected)}
            containerClassName={"pagination"}
            pageClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </>
      )}
    </>
  );
};

export default Reviews;
