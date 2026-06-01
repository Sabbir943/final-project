import Banner from '@/component/Banner';
import DearmJob from '@/component/DearmJob';
import FeaturesJobs from '@/component/FeaturesJobs';
import Pricing from '@/component/Pricing';
import React from 'react';

const page = () => {
    return (
        <div>
            <DearmJob/>
            <Banner/>
            <FeaturesJobs/>
            <Pricing/>

        </div>
    );
};

export default page;