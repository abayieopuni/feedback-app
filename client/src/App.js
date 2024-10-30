// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeebackStats from './components/FeebackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider> {}
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path='/api/feedback'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeebackStats />
                                    <FeedbackList />
                                </>
                            }
                        />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
