import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamStyle from '../components/Common/TeamStyle';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Our Skilled Team"
                    BGImage="bg-one"
                />

                <TeamStyle />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Team;
