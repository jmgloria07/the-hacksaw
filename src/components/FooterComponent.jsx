import React from 'react'

const FooterComponent = () => {
    return (

        <footer className="text-body-secondary">
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <span className='float-left'>
                            ©reated and built with love by <a href='https://quantumjosh.me'>Josh</a>
                        </span>
                    </div>
                    <div className='col'>
                        <ul className='d-flex list-group-horizontal float-end' style={{ listStyleType: 'none' }}>
                            <li className='me-3'>
                                <a className='text-body-secondary' href='#'>
                                    Back To Top
                                </a>
                            </li>
                            <li className='me-3'>
                                <a className='text-body-secondary' href='https://quantumjosh.me'>
                                    <i className='bi bi-file-earmark-person' />
                                </a>
                            </li>
                            <li className='me-3'>
                                <a className='text-body-secondary' href='https://github.com/jmgloria07'>
                                    <i className='bi bi-github' />
                                </a>
                            </li>
                            <li className='me-3'>
                                <a className='text-body-secondary' href='https://www.linkedin.com/in/jmgloria07/'>
                                    <i className='bi bi-linkedin' />
                                </a>
                            </li>
                            <li className='me-3'>
                                <a className='text-body-secondary' href='https://www.instagram.com/jmgloria07/'>
                                    <i className='bi bi-instagram' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </footer>
    )
}

export default FooterComponent

// {/* <footer className="footer mt-auto py-3 bg-body-tertiary">
//   <div className="container">
//     <span className="text-body-secondary">Place sticky footer content here.</span>
//   </div>
// </footer> */}