import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature .propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ngay Nghi Nganh Doc Than',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/4/c/f/94cf23dfe6eadd4b32af56a8eae57278.jpg'
        },
        {
            id: 1,
            name: 'Ngu Mot Minh',
            thumbnailUrl:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/b/f/9/b/bf9bb9fd86fe634c73e1e9f84ff761b5.jpg'
        },
        {
            id: 1,
            name: 'Hen gap em duoi Trang',
            thumbnailUrl:'	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/6/2/7/2627c10c924237d129a289cc89cd695c.jpg'
        }
    ]
    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature ;