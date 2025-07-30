import React from 'react'
import { useState } from 'react'
import Navbar from '~/components/Navbar'

const upload = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

  return (
    <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
        <Navbar/>

        <section className='main-section'>
            <div className='page-heading'>
                <h1>Smart Feedback for Quicker Hiring</h1>
                {isProcessing ? (
                    <p className='text-gray-500'>Processing your resume...</p>
                ) : (
                    <p className='text-gray-500'>Upload your resume to get AI feedback.</p>
                )}
            </div>
        </section>
    </main>
  )
}

export default upload