import React, { useState, useEffect } from 'react';
import he from 'he';
import Link from 'next/link';
import NewsCards from '../Components/NewsCards';

function LeadSection(props) {
  const leadNews = props.leadNews ? props.leadNews : [];
  const latestNews = props.latestNews ? props.latestNews : [];
  const loaded = props.loaded ? props.loaded : false;
  const [activeMenu, setActiveMenu] = useState('Headline');

  console.log(props);

  return (
    <>
      <div className="news-tabs">
        <nav>
          <div className="nav nav-tabs" id="nav-tab">
            <Link href="#nav-1">
              <a
                onClick={() => setActiveMenu('Headline')}
                className={
                  activeMenu === 'Headline'
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                id="nav-home-tab"
                data-toggle="tab"
              >
                Headline
              </a>
            </Link>
            <Link href="#nav-2">
              <a
                onClick={() => setActiveMenu('Latest News')}
                className={
                  activeMenu === 'Latest News'
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                id="nav-profile-tab"
                data-toggle="tab"
              >
                Latest News
              </a>
            </Link>
            {/* <Link href="#nav-3">
              <a
                onClick={() => setActiveMenu('Popular News')}
                className={
                  activeMenu === 'Popular News'
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                id="nav-contact-tab"
                data-toggle="tab"
              >
                Popular News
              </a>
            </Link> */}
          </div>
        </nav>
        <div className="tab-content">
          <div 
            className={
              activeMenu === 'Headline'
                ? 'tab-pane fade show active'
                : 'tab-pane fade'
            }
            id="nav-1"
          >
              <NewsCards
                format="lead"
                id={leadNews.id}
                slug={leadNews.slug}
                thumbnail={
                  loaded
                    ? leadNews._embedded['wp:featuredmedia'][0].source_url
                    : '/img/post-thumbnail.svg'
                }
                headline={loaded ? he.decode(leadNews.title.rendered) : null}
                leadText={
                  loaded
                    ? leadNews.acf.lead_text
                      ? leadNews.acf.lead_text
                      : he.decode(
                          leadNews.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')
                        )
                    : null
                }
              />
          </div>
          <div 
            className={
              activeMenu === 'Latest News'
                ? 'tab-pane fade show active'
                : 'tab-pane fade'
            }
            id="nav-2"
          >
            <div className="news-widget">
              <div className="row">
                {latestNews.map((item, index) =>
                  <div key={index} className="col-lg-6 col-md-6">
                    <NewsCards format="boxed-down" headline={loaded ? item.title.rendered : null} thumbnail={loaded ? item._embedded['wp:featuredmedia'][0].source_url : null} leadText={loaded ? item.acf.lead_text ? item.acf.lead_text : he.decode(item.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")) : null} id={item.id} slug={item.slug}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadSection;
