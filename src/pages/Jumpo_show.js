import React from 'react';
import SearchBar from '../components/SearchBar';
import Sijang_detail from '../components/Sijang_info/Sijang_detail';
import BottomBar from '../components/BottomBar';

const Jumpo_show = () => {
    return (
        <div>
            <SearchBar/>
            <Sijang_detail/>
            <BottomBar/>
        </div>
    );
};

export default Jumpo_show;