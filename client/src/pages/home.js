import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Status from '../components/home/Status';
import Posts from '../components/home/Posts';
import RightSideBar from '../components/home/RightSideBar';

import { useSelector } from 'react-redux';
import LoadIcon from '../images/loading.gif';

import Paginations from '../paginations/paginations';
import LeftSideBar from '../sideBar/leftSideBar';



let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if (window.location.pathname === '/') {
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (
        <div className="home row mx-0">
            <div className="col-md-3">
                <LeftSideBar />
                <Link to="/userForm">Steps</Link>
            </div>
            <div className="col-md-6">
                <Status />
                {
                    homePosts.loading
                        ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                        : (homePosts.result === 0 && homePosts.posts.length === 0)
                            ? <h2 className="text-center">No Post</h2>
                            : <Posts />
                }

            </div>
            {/* <Paginations /> */}
            <div className="col-md-3">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
