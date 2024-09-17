import React, {useEffect, useState} from 'react'
import {useLineNumber} from "../context/LineNumberContext";
import {useWindowMenu} from "../context/WindowMenuContext";
import { faTwitter, faGithub, faLinkedin, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";

const Connect = () => {
    const { setLineNumber } = useLineNumber();
    const { setCurrentPage } = useWindowMenu();

    useEffect(() => {
        setLineNumber("37");
        setCurrentPage("Connect.jsx")
    }, [setLineNumber, setCurrentPage]);

    const socialLinks = [
        {
            "icon": faTwitter,
            "name": "@Petsterr",
            "url": "https://twitter.com/Petsterr",
        },
        {
            "icon": faGithub,
            "name": "Petster",
            "url": "http://github.com/petster",
        },
        {
            "icon": faLinkedin,
            "name": "Jason Palmeri",
            "url": "https://linkedin.com/in/jasontpalmeri",
        }
    ]

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        try {
            if(!name || !email || !subject || !message) {
                throw new Error("Please ensure all fields are filled");
            }
            if(!emailPattern.test(email)) {
                throw new Error("Email does not match pattern example@example.com");
            }
            if(name.length <= 1) {
                throw new Error("Please enter a name with a value greater than 1 character");
            }
            if(subject.length <= 1) {
                throw new Error("Please enter a subject with a value greater than 1 character");
            }
            if(message.length <= 25) {
                throw new Error("Please enter a message with a value greater than 25 character");
            }
            emailjs.sendForm('service_8kzfl4q', 'template_73g89ol', '#myForm', 'user_VcIGVN78EA4SviSvY06Ot').then(function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your Email was Submitted!',
                    text: 'I will get back to you soon!'
                });
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }, function(err) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Your Email was NOT Submitted!',
                    text: 'Please try Again Later!'
                });
                console.log(err);
            });
        } catch (e) {
            let msg = e.message;
            Swal.fire({
                title: "Error",
                text: msg,
                icon: 'error'
            })
        }
    }

  return (
    <div className='flex flex-row gap-5 text-white text-sm p-4'>
        <div className="t-bg rounded-md w-full mx-auto p-5">
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="flex-grow">
                    <form id="myForm" className="w-full text-black p-3 mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">Your Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" type="text" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">Your Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" title="please ensure your email follows the 'you@example.com' guideline" name="email" id="email" type="email" placeholder="you@example.com"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="subject">Subject</label>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="subject" id="subject" type="text" placeholder="Contacting You For..."/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} minLength={25} rows={4} style={{resize: 'none'}} className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" title="please ensure this field contains 25 characters or more" name="message" id="message" placeholder="Hey, ..."/>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end flex-wrap -mx-3 mb-6">
                            <button className="bg-blue-600 rounded-md text-white p-3 text-right hover:bg-blue-900" type="button" onClick={submitForm}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="lg:hidden w-1/2 rounded-md h-1 bg-white mx-auto m-6"></div>
                <div className="flex-grow lg:w-1/12 p-3 mx-auto">
                    <p className="hidden lg:block uppercase tracking-wide text-white text-xs font-bold">My Socials</p>
                    <div className="flex flex-wrap lg:flex-col">
                        {socialLinks.map((da, index) =>
                            <a href={da.url} key={index} target="_blank" rel="noreferrer" className="w-full rounded-md p-4">
                                <div className="flex flex-row items-center content-center justify-center rounded-md bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:shadow-xl border-2 border-transparent hover:border-white">
                                    <div className="p-2"><FontAwesomeIcon className="fa-2x md:fa-3x text-white hover:drop-shadow-lg" icon={da.icon} /></div>
                                    <div className="p-2 uppercase tracking-wid text-white font-bold flex-grow text-center">{da.name}</div>
                                </div>
                            </a>
                        )}
                        <div className="w-full rounded-md p-4">
                            <div className="flex flex-row items-center content-center justify-center rounded-md bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:shadow-xl border-2 border-transparent hover:border-white">
                                <div className="p-2"><FontAwesomeIcon className="fa-2x md:fa-3x text-white hover:drop-shadow-lg" icon={faDiscord} /></div>
                                <div className="p-2 uppercase tracking-wid text-white font-bold flex-grow text-center">petster</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Connect