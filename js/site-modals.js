$(document).ready(function () {
    // Modal triggers
    $(document).on('click', '.modal .close, .modal .close_modal', function () {
        $('.modal').hide();
        $('body').removeClass('disable-scroll');
    });
    $('.authorising_agent_form_modal').click(function () {
        $('.modal').hide();
        $('#authorising_agent_form_modal').show();
        $('body').addClass('disable-scroll');
    });
    $(document).on('click', '.terms_and_conditions_modal', function (e) {
        e.preventDefault();
        $('.modal').hide();
        $('#terms_and_conditions_modal').show();
        $('body').addClass('disable-scroll');
    });
    $(document).on('click', '.privacy_policy_modal', function (e) {
        e.preventDefault();
        $('.modal').hide();
        $('#privacy_policy_modal').show();
        $('body').addClass('disable-scroll');
    });
    $(document).on('click', '.cookie_policy_modal', function () {
        $('.modal').hide();
        $('#cookie_policy_modal').show();
        $('body').addClass('disable-scroll');
    });
    $(document).on('click', '.complaints_policy_modal', function () {
        $('.modal').hide();
        $('#complaints_policy_modal').show();
        $('body').addClass('disable-scroll');
    });
    $(document).on('click', '.key_documents_modal', function () {
        $('.modal').hide();
        $('#key_documents_modal').show();
        $('body').addClass('disable-scroll');
    });





    // Key documents modal
    var key_documents_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="iframe-container">
            <iframe src="https://energyclaimsexperts.co.uk/assets/pdf/hattons_bec_client_retainer_pack.pdf"></iframe>
        </div>
        <div class="iframe-container">
        <iframe src="https://energyclaimsexperts.co.uk/assets/pdf/hattons_terms_of_business.pdf"></iframe>
        </div>
    `
    $('#key_documents_modal .column').prepend(key_documents_modal_content);





    // Rejected modal
    var rejected_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <p class="h2 margin-15">Our apologies</p>
    `
    $('#rejected_modal .column').prepend(rejected_modal_content);





    // Terms & conditions modal
    var terms_and_conditions_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <p class="h2">Terms &amp; conditions</p>
        <p class="h4">Introduction</p>
        <p>You should read these terms and conditions carefully before using this website (the Site) which is provided by us free of charge. References in these terms and conditions to the Site includes the following websites: www.ethical-utilities.co.uk and all associated web pages.</p>
        <p>If you do not agree with or accept any of these terms and conditions, you should cease using the Site immediately.</p>
        <p>If you have any questions about the Site, please contact us using the contact form available at ethical-utilities.co.uk</p>
        <p>Please note that no sale of products or services takes place on this website. Any agreement to provide legal services will be governed by separate terms and conditions in addition to these terms and will be provided to you separately.</p>
        <p class="h4">About us</p>
        <p>The Energy Claims Experts is a trading style of Ethical Utilities Ltd. Company No: 13490837. Registered office address: Cbx Cobalt Business Exchange Ethical Utilities Ltd, 212 - 213 Cobalt Park Way, Newcastle Upon Tyne, England, NE28 9NZ.</p>
        <p class="h4">Availability, accessibility and conditions of use</p>
        <p>While we make every effort to ensure that the Site is available, we do not represent, warrant or guarantee in any way the Site's continued availability at all times or uninterrupted use by you of the Site. We reserve the right to suspend or cease the operation of the Site from time to time at our sole discretion.</p>
        <p>We seek to make the Site as accessible as possible. If you have any difficulties using the Site, please contact us using the contact form available on our website.</p>
        <p>As a condition of your use of the Site, you agree:</p>
        <div class="basic-list">
            <ul>
                <li>Not to use the Site for any purpose that is unlawful under applicable law, or prohibited by these terms and conditions</li>
                <li>Not to defame or disparage anybody in a manner which is obscene, derogatory or offensive</li>
                <li>To be responsible for ensuring that your use of the Site is consistent with all applicable laws and regulations.</li>
            </ul>
        </div>
        <p>We reserve the right to prevent or suspend your access to the Site if you do not comply with any part of these terms and conditions or any applicable law.</p>
        <p class="h4">Your privacy and personal information</p>
        <p>Your privacy and personal information are important to us. Any personal information that you provide to us will be dealt with in line with our privacy policy, which explains what personal information we collect from you, how and why we collect, store, use and share such information, your rights in relation to your personal information and how to contact us and supervisory authorities in the event you have a query or complaint about the use of your personal information.</p>
        <p>Our privacy policy is available <span class="link privacy_policy_modal">here</span></p>
        <p class="h4">Cookies and other information-gathering technologies</p>
        <p>Our website uses cookies. Cookies are small text files placed on your device (eg computer, smartphone or other electronic device) when you use our website. We use cookies to help us recognise you and your device and store some information about your preferences or past actions. These cookies also allow us to improve our site.</p>
        <p>We will ask for your permission (consent) to place cookies or other similar technologies on your device, except where these are essential for us to provide you with a service that you have requested.</p>
        <p>You can also opt out of cookies by using your browser's cookie settings. Most browsers automatically accept cookies, but if you do not wish to have cookies on your system, you can set your browser preferences to refuse them or to alert you when cookies are being sent. In order to disable cookies, please consult your browser's 'help' section for instructions. If you do this, please be aware that you may lose some of the functionality of this website. For further information about cookies and how to disable them please go to the Information Commissioner's webpage on cookies: <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank">https://ico.org.uk/for-the-public/online/cookies/</a></p>
        <p>For more information on which cookies we use and how we use them, see our Cookie policy <span class="link cookie_policy_modal">here</span></p>
        <p class="h4">Ownership, use and intellectual property rights</p>
        <p>The Site and all content within the Site is owned and operated by us and/or our licensors. We and our licensors reserve all rights.</p>
        <p>The Site is for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, revise, perform, reproduce, publish, license, deep-link, create derivative works from, transfer, or sell any information or content obtained from the Site unless expressly authorised by us.</p>
        <p>Any intellectual property rights (including without limitation all patents, copyright, database rights and trademarks (whether registered or unregistered)) subsisting in any content or material on the Site belong to us and/or our licensors. All rights are reserved for the benefit of ourselves and/or our licensors. Nothing in these terms and conditions grants you any rights in the Site or the content within the Site.</p>
        <p class="h4">Disclaimers</p>
        <p>While we use reasonable efforts to include accurate and up-to-date information on the Site, we do not represent, warrant or promise (whether express or implied) that any information is or remains accurate, complete and up to date, or fit or suitable for any purpose. Any reliance you place on the information on the Site is at your own risk. Nothing in these terms and conditions shall operate to prejudice any mandatory statutory requirement or your statutory rights.</p>
        <p>Content on the Site is provided for your general information purposes only and to inform you about us and our products and news, features, services and other websites which may be of interest. It does not constitute technical, financial, or legal advice or any other type of advice and should not be relied on for any purposes.</p>
        <p class="h4">Hyperlinks and third-party sites</p>
        <p>The Site may contain hyperlinks or references to external third-party websites. Any such hyperlinks or reference is provided for your convenience only. We have no control over third party websites and accept no responsibility for any content, material or information contained in them. The display of any hyperlink and reference to any third-party website does not constitute an endorsement of such third party's website, products or services. Your use of a third-party site may be governed by the terms and conditions of that third-party site.</p>
        <p class="h4">Equality and diversity</p>
        <p>We are committed to promoting equality and diversity in all our dealings with clients, third parties and employees. Please contact us if you would like a copy of our Equality and diversity policy.</p>
        <p class="h4">Warranties and limitation of liability</p>
        <p>You agree that your use of the Site is on an 'as is' and 'as available' basis. Consequently, we make no representations, warranties, conditions or other terms (whether express or implied) in relation to the provision of the Site, including without limitation as to completeness, accuracy and currency or any content and information on the Site, or as to satisfactory quality, or fitness for particular purpose.</p>
        <p>To the maximum extent permitted by applicable law and our professional obligations, we exclude all liability (whether arising in contract, tort, breach of statutory duty or otherwise) which we may otherwise have to you as a result of:</p>
        <div class="basic-list">
            <ul>
                <li>Any error or inaccuracies in any information or material within or relating to the Site</li>
                <li>The unavailability of the Site for whatsoever reason</li>
                <li>Any representation or statement made on the Site</li>
            </ul>
        </div>
        <p>Under no circumstances shall we be liable to you for any loss or damage suffered (including without limitation direct or indirect losses) arising from your use of, or reliance on, the Site.</p>
        <p>We do not exclude or limit our liability for death or personal injury arising from our negligence, for any fraudulent misrepresentation made by us on the Site or for any other statutory rights which are not capable of being excluded.</p>
        <p class="h4">Indemnity</p>
        <p>If you are in breach of any of these terms and conditions, you agree to indemnify and hold us harmless in respect of any costs, expenses, claims, proceedings, actions, losses, damages or liabilities incurred by us in relation to or arising from such a breach.</p>
        <p class="h4">Variation</p>
        <p>We reserve the right to vary these terms and conditions from time to time without notifying you. By continuing to use and access the Site you agree to be bound by any variation made by us. It is your responsibility to check these terms and conditions from time-to-time to verify such variations.</p>
        <p class="h4">Governing law and jurisdiction</p>
        <p>These terms and conditions are governed and construed in accordance with the laws of England and Wales and you consent to the exclusive jurisdiction of the courts of England and Wales.</p>
        <p class="h4">Complaints</p>
        <p>We want to give you the best possible service. However, if at any point you become unhappy or concerned about the service we have provided, please inform us immediately so that we can do our best to resolve the problem.</p>
        <p>In the first instance it may be helpful to contact the person who is working on your case to discuss your concerns and we will do our best to resolve any issues at this stage. If you would like to make a formal complaint, then you can read our full complaints procedure <span class="link complaints_policy_modal">here</span>. Making a complaint will not affect how we handle your case.</p>
        <p>We will always attempt to resolve any complaints, but where this is not possible, complaints and redress mechanisms are provided through the Solicitors Regulation Authority and the Legal Ombudsman.</p>
        `
    $('#terms_and_conditions_modal .column').append(terms_and_conditions_modal_content);





    // Privacy policy modal content
    var privacy_policy_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <p class="h2">Privacy Policy</p>
        <p class="h4">Our role in your privacy</p>
        <p>We take your privacy very seriously. Please read this privacy policy carefully as it contains important information on who we are and how and why we collect, store, use and share your personal data. It also explains your rights in relation to your personal data and how to contact us or supervisory authorities in the event you have a complaint.</p>
        <p>When we use your personal data we are regulated under the UK General Data Protection Regulation (GDPR). We are responsible as 'controller' of that personal data for the purposes of the GDPR. Our use of your personal data is subject to your instructions, the GDPR, other relevant UK legislation and our professional duty of confidentiality.</p>
        <p class="h4">Key Terms</p>
        <div class="basic-list">
            <ul>
                <li><strong>We, us, our:</strong> Ethical Utilities Ltd</li>
                <li><strong>Personal data:</strong> Any information relating to an identifiedor identifiable individual</li>
                <li><strong>Special category personal data:</strong> Personal data revealingracial or ethnic origin, political opinions, religious beliefs, philosophical beliefs or trade union membershipGenetic and biometric dataData concerning health, sex life or sexual orientation</li>
            </ul>
        </div>
        <p class="h4">Personal data we collect about you</p>
        <p>The information below sets out the personal data we will or may collect in the course of advising and/or acting for you.</p>
        <table>
            <thead>
                <tr>
                    <th>Personal data we will collect</th>
                    <th>Personal data we may collect depending on why you have instructed us</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Personal data we will collect">Your name, address and telephone number</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your National Insurance and tax details</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Information to enable us to check and verify your identity, for example your date of birth or passport details</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your bank and/or building society details</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Electronic contact details, for example your email address and mobile phone number</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Details of your online presence, for example your Facebook or LinkedIn profile</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Information relating to the matter in which you are seeking our advice or representation</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Details of your spouse/partner and dependants or other family members, for example if you instruct us on a family matter or a will</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Information to enable us to undertake a credit or other financial checks on you</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your employment status and details including salary and benefits, if you instruct us on matter where these details are relevant</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Your financial details so far as relevant to your instructions, for example if you are instructing on a financial matter</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your employment records including details of your attendance, sickness, performance, disciplinary, conduct and grievances (including relevant special category personal data), for example if you instruct us on matter in which your employment records are relevant</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect">Information about your use of our IT, communication and other systems, and other monitoring information, for example if using our secure online client portal</td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your nationality and immigration status and information from related documents, such as your passport or other identification for example if you instruct us on an immigration matter</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect"></td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Details of your pension arrangements, for example if you instruct us about financial arrangements following breakdown of a relationship</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect"></td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Your racial or ethnic origin, gender and sexual orientation, religious or similar beliefs, for example if you instruct us on discrimination claimYour trade union membership, for example if your matter is funded by a trade union</td>
                </tr>
                <tr>
                    <td data-label="Personal data we will collect"></td>
                    <td data-label="Personal data we may collect depending on why you have instructed us">Personal identifying information, such as your eye colour or your parents' names, for example if you instruct us to incorporate a company for yourYour medical records, for example if we are acting for you in a personal injury claim</td>
                </tr>
            </tbody>
        </table>
        <p>This personal data is required to enable us to provide our service to you. If you do not provide personal data we ask for, it may delay or prevent us from providing services to you.</p>
        <p class="h4">How your personal data is collected</p>
        <p>We collect most of this information from you, direct or via our secure online client portal. However, we may also collect information:</p>
        <div class="basic-list">
            <ul>
                <li>From publicly accessible sources, for example Companies House or HM Land Registry</li>
                <li>Directly from a third party, including: your bank or building society, other financial institutions or advisors</li>
                <li>Your employer and/or trade union, professional body or pension administrators</li>
                <li>Consultants and other professionals we may engage in relation to your matter</li>
                <li>Your doctors, medical and occupational health professionals</li>
                <li>Sanctions screening providers</li>
                <li>Credit reference agencies</li>
                <li>Client due diligence providers</li>
                <li>Via our website based upon our use of cookies (for more information on cookies, please see our cookies policy)</li>
                <li>Via our information technology (IT) systems, including: case management, document management and time recording systems</li>
                <li>Door entry systems and reception logs</li>
                <li>Automated monitoring of our websites and other technical systems, such as our computer networks and connections, CCTV and access control systems, communications systems, email and instant messaging systems</li>
            </ul>
        </div>
        <p class="h4">How and why we use your personal data</p>
        <p>Under data protection law, we can only use your personal data if we have a proper reason:</p>
        <div class="basic-list">
            <ul>
                <li>To comply with our legal and regulatory obligations</li>
                <li>For the performance of our contract with you or to take steps at your request before entering into a contract</li>
                <li>For our legitimate interests or those of a third party or where you have given consent.</li>
            </ul>
        </div>
        <p>A legitimate interest is when we have a business or commercial reason to use your information, so long as this is not overridden by your own rights and interests.The table below explains what we use (process) your personal data for and our reasons for doing so:</p>
        <table>
            <thead>
                <tr>
                    <th>What we use your personal data for</th>
                    <th>Our reasons</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="What we use your personal data for">To provide legal services to you</td>
                    <td data-label="Our reasons">For the performance of our contract with you or to take steps at your request before entering into a contract</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Conducting checks to identify our clients and verify their identityScreening for financial and other sanctions or embargoesOther processing necessary to comply with professional, legal and regulatory obligations that apply to our business, for example under health and safety regulation or rules issued by our professional regulatorGathering and providing information required by or relating to audits, enquiries or investigations by regulatory bodies and our providers of commercial finance</td>
                    <td data-label="Our reasons">To comply with our legal and regulatory obligations</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Ensuring business policies are adhered to, for example policies covering security and internet use</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, to ensure we are following our own internal procedures so we can deliver the best service to you</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Operational reasons, such as improving efficiency, training and quality control</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, to be as efficient as possible so we can deliver the best service for you at the best price</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Ensuring the confidentiality of commercially sensitive information</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, to protect our intellectual property and other commercially valuable informationTo comply with our legal and regulatory obligations</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Statistical analysis to help us manage our practice and to assess our financial performance, client base, work type or other efficiency measures</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, to be as efficient as we can so we can deliver the best service for you at the best price</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Preventing unauthorised access and modifications to systems</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, for example to prevent and detect criminal activity that could be damaging for us and for youTo comply with our legal and regulatory obligations</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Updating and enhancing client records</td>
                    <td data-label="Our reasons">For the performance of our contract with you or to take steps at your request before entering into a contractTo comply with our legal and regulatory obligationsFor our legitimate interests or those of a third party, for example making sure that we can keep in touch with our clients</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Statutory returns</td>
                    <td data-label="Our reasons">To comply with our legal and regulatory obligations</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Ensuring safe working practices, staff administration and assessments</td>
                    <td data-label="Our reasons">To comply with our legal and regulatory obligationsFor our legitimate interests or those of a third party, to make sure we are following our own internal procedures and working efficiently so we can deliver the best service to you</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Marketing our services and those of selected third parties to</td>
                    <td data-label="Our reasons">For our legitimate interests or those of a third party, for example to promote</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Existing and former clients / Third parties who have previously expressed an interest in our services / Third parties with whom we have had no previous dealings</td>
                    <td data-label="Our reasons">Our business to existing and former clients</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">Credit reference checks via external credit reference agencies</td>
                    <td data-label="Our reasons">For our legitimate interests or a those of a third party, including for credit control and to ensure our clients are likely to be able to pay for our services</td>
                </tr>
                <tr>
                    <td data-label="What we use your personal data for">External audits and quality checks, for example Lexcel, ISO, our providers of commercial finance or Investors in People accreditation and the audit of our accounts</td>
                    <td data-label="Our reasons">For our legitimate interests or a those of a third party, to maintain our accreditations so we can demonstrate we operate at the highest standardsTo comply with our legal, financial and regulatory obligations</td>
                </tr>
            </tbody>
        </table>
        <p>The above table does not apply to special category personal data, which we will only process with your explicit consent.</p>
        <p class="h4">Promotional communications</p>
        <p>We may use your personal data to send you updates (by email, text message, telephone or post) about legal developments that might be of interest to you and/or information about our services, including exclusive offers, promotions or new services or products.</p>
        <p>We have a legitimate interest in processing your personal data for promotional purposes (see above 'How and why we use your personal data'). This means we do not usuallyneed your consent to send you promotional communications. However, where consent is needed, we will ask for this consent separately and clearly.</p>
        <p>We will always treat your personal data with the utmost respect and never share it with other organisations for marketing purposes.</p>
        <p>You have the right to opt out of receiving promotional communications at any time by:</p>
        <div class="basic-list">
            <ul>
                <li>contacting us by sending an email to enquiries@ethicalutilities.co.uk</li>
                <li>using the 'unsubscribe' link in emails or 'STOP' number in texts</li>
            </ul>
        </div>
        <p>We may ask you to confirm or update your marketing preferences if you instruct us to provide further services in the future, or if there are changes in the law, regulation, or the structure of our business.</p>
        <p class="h4">Who we share your personal data with</p>
        <p>We routinely share personal data with:</p>
        <div class="basic-list">
            <ul>
                <li>Professional advisers who we instruct on your behalf or refer you to, for example barristers, medical professionals, accountants, tax advisors or other experts</li>
                <li>Other third parties where necessary to carry out your instructions, for example your mortgage provider, HM Land Registry or Companies House</li>
                <li>Credit reference agencies</li>
                <li>Insurers, brokers and legal funding providers</li>
                <li>External auditors or accountants, for example in relation to accreditation and the audit of our accounts</li>
                <li>Our bank</li>
                <li>External service suppliers, representatives and agents that we use to make our business more efficient, for example typing services, marketing agencies, document collation or analysis suppliers</li>
            </ul>
        </div>
        <p>We only allow our service providers to handle your personal data if we are satisfied they take appropriate measures to protect your personal data. We also impose contractual obligations on service providers relating to ensure they can only use your personal data to provide services to us and to you.</p>
        <p>We may disclose and exchange information with law enforcement agencies and regulatory bodies to comply with our legal and regulatory obligations.</p>
        <p>We may also need to share some personal data with other parties, such as potential buyers of some or all of our business or during a re-structuring. Usually information will be anonymised, but this may not always be possible. The recipient of the information will be bound by confidentiality obligations.</p>
        <p class="h4">Where your personal data is held</p>
        <p>Information may be held at our offices, third party agencies, service providers, representatives and agents as described above (see 'Who we share your personal data with')Some of these third parties may be based outside the UK. For more information, including on how we safeguard your personal data when this occurs, see below: 'Transferring your personal data out of the UK'.</p>
        <p class="h4">How long your personal data will be kept</p>
        <p>We will keep your personal data after we have finished advising or acting for you. We will do so for one of these reasons:</p>
        <div class="basic-list">
            <ul>
                <li>To respond to any questions, complaints or claims made by you or on your behalf</li>
                <li>To show that we treated you fairly</li>
                <li>To keep records required by law</li>
            </ul>
        </div>
        <p>We will not retain your data for longer than necessary for the purposes set out in this policy. Different retention periods apply for different types of data. When it is no longer necessary to retain your personal data, we will delete or anonymise it.</p>
        <p class="h4">Transferring your personal data out of the UK</p>
        <p>To deliver services to you, it may be necessary for us to share your personal data outside the United Kingdom.We will, however, ensure the transfer complies with data protection law and all personal data will be secure.</p>
        <p class="h4">Your rights</p>
        <p>You have the following rights, which you can exercise free of charge:</p>
        <table>
            <thead>
                <tr>
                    <th>Rights</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Rights">Access</td>
                    <td data-label="Definition">The right to be provided with a copy of your personal data</td>
                </tr>
                <tr>
                    <td data-label="Rights">Rectification</td>
                    <td data-label="Definition">The right to require us to correct any mistakes in your personal data</td>
                </tr>
                <tr>
                    <td data-label="Rights">To be forgotten</td>
                    <td> data-label="Definition"The right to require us to delete your personal data (in certain situations)</td>
                </tr>
                <tr>
                    <td data-label="Rights">Restriction of processing</td>
                    <td data-label="Definition">The right to require us to restrict processing of your personal data in certain circumstances, for example if you contest the accuracy of the data</td>
                </tr>
                <tr>
                    <td data-label="Rights">Data portability</td>
                    <td data-label="Definition">The right to receive the personal data you provided to us, in a structured, commonly used and machine-readable format and/or transmit that data to a third party (in certain situations)</td>
                </tr>
                <tr>
                    <td data-label="Rights">To object</td>
                    <td data-label="Definition">The right to object. At any time to your personal data being processed for direct marketing (including profiling). In certain other situations to our continued processing of your personal data, for example processing carried out for the purpose of our legitimate interests.</td>
                </tr>
                <tr>
                    <td data-label="Rights">Not to be subject to automated individual decision-making</td>
                    <td data-label="Definition">The right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you</td>
                </tr>
            </tbody>
        </table>
        <p>For further information on each of those rights, including the circumstances in which they apply, please contact us or see the <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/" target="_blank">Guide tothe General Data Protection Regulations (GDPR)</a> from the Information Commissioner's Office(ICO).</p>
        <p>If you would like to exercise any of those rights, please:</p>
        <div class="basic-list">
            <ul>
                <li>Complete a data subject request form;</li>
                <li>Email, call or write to us; and</li>
                <li>Let us have enough information to identify you (including your full name, address and client or matter reference number)</li>
                <li>Let us have proof of your identity and address (a copy of your driving licence or passport and a recent utility or credit card bill); and</li>
                <li>let us know what right you want to exercise and the information to which your request relates.</li>
            </ul>
        </div>
        <p class="h4">Children's Information</p>
        <p>Our priority is to add protection for children whilst using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p>Ethical Utilities does not knowingly collect any Personal Identifiable Information form children under the age of 13.</p>
        <p>If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will use our best efforts to promptly remove such information from our records.</p>
        <p class="h4">Keeping your personal data secure</p>
        <p>We have appropriate security measures to prevent personal data from being accidentally lost or used or accessed unlawfully. We limit access to your personal data to those who have a genuine business need to access it. Those processing your information will do so only in an authorised manner and are subject to a duty of confidentiality.</p>
        <p>We also have procedures in place to deal with any suspected data security breach. We will notify you and any applicable regulator of a suspected data security breach where we are legally required to do so.</p>
        <p>If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit <a href="www.getsafeonline.org" target="_blank">www.getsafeonline.org</a>. Get Safe Online is supported by HM Government and leading businesses.</p>
        <p class="h4">How to complain</p>
        <p>We hope thatwecan resolve any query or concern you may raise about our use of your information.</p>
        <p>The GDPR also gives you right to lodge a complaint with the Information Commissioner who may be contacted at <a href="https://ico.org.uk/make-a-complaint/" target="_blank">https://ico.org.uk/make-a-complaint/</a>, or telephone: 0303 123 1113</p>

    `
    $('#privacy_policy_modal .column').append(privacy_policy_modal_content);





    // Cookie policy modal content
    var cookie_policy_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <p class="h2">Cookie Policy</p>
        <p>Ethical Utilities ('we' or 'us' or 'our') may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website [https://www.ethical-utilities.co.uk/], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the 'Site') to help customise the Site and improve your experience.</p>
        <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the 'Last Updated' date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
        <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>
        <p>This cookie policy was created using Termly.</p>
        <p class="h4">Use of Cookies</p>
        <p>A 'cookie' is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site.</p>
        <p>We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>
        <p class="h4">Types of Cookies</p>
        <p>The following types of cookies may be used when you visit the Site:</p>
        <p class="h6">Advertising Cookies</p>
        <p>Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.</p>
        <p class="h6">Analytics Cookies</p>
        <p>Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.</p>
        <p class="h6">Our Cookies</p>
        <p>Our cookies are 'first-party cookies', and can be either permanent or temporary. These are necessary cookies, without which the Site won't work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site.</p>
        <p class="h6">Personalization Cookies</p>
        <p>Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.</p>
        <p class="h6">Security Cookies</p>
        <p>Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorized parties.</p>
        <p class="h6">Site Management Cookies</p>
        <p>Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.</p>
        <p class="h6">Third-Party Cookies</p>
        <p>Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.</p>
        <p class="h4">Control of Cookies</p>
        <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser's settings. Please be aware that such action could affect the availability and functionality of the Site.</p>
        <p>For more information on how to control cookies, check your browser or device's settings for how you can control or reject cookies, or visit the following links:</p>
        <div class="basic-list">
            <ul>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank">Apple Safari</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=en" target="_blank">Google Chrome</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Microsoft Edge</a></li>
                <li><a href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Microsoft Internet Explorer</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" target="_blank">Mozilla Firefox</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank">Opera</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Android&hl=en&oco=1" target="_blank">Android (Chrome)</a></li>
                <li><a href="https://docs.blackberry.com/en/smartphones/blackberry-10-devices/blackberry-classic/" target="_blank">Blackberry</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=iOS&hl=en&oco=1" target="_blank">Iphone or Ipad (Chrome)</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Android&hl=en&oco=1" target="_blank">Iphone or Ipad (Safari)</a></li>
            </ul>
        </div>
        <p>In addition, you may opt-out of some third-party cookies through the <a href="https://optout.networkadvertising.org/?c=1#!%2F" target="_blank">Network Advertising Initiative's Opt-Out Tool</a></p>
        <p class="h4">Other tracking technologies</p>
        <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A 'web beacon' or 'pixel tag' is tiny object or image embedded in a web page or email.</p>
        <p>They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>
        <p class="h4">Privacy Policy</p>
        <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy posted on the Site <span class="link privacy_policy_modal">here</span>. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>
        <p class="h4">Contact us</p>
        <p>If you have questions or comments about this Cookie Policy, please contact us at:</p>
        <p>
            Ethical Utilities<br />
            70 Hotspur North<br />
            Backworth Park<br />
            Newcastle-Upon-Tyne<br />
            NE27 OFZ
        </p>
        <p>
            <strong>Phone:</strong> 01670 789716<br />
            <strong>Email:</strong> businessclaims@ethicalutilities.co.uk
        </p>
    `
    $('#cookie_policy_modal .column').append(cookie_policy_modal_content);





    // Complaints policy modal content
    var complaints_policy_modal_content =
        `
        <div class="logo">
            <img src="assets/img/svg/logo.svg" alt="" />
        </div>
        <p class="h2">Complaints Policy</p>
        <p>We are committed to providing a high-quality legal service. We acknowledge that we may not always get it right so if something has gone wrong, including in relation to the bill, we need you to tell us so that we can do our best to resolve the problem.</p>
        <p class="h4">How do I make a complaint?</p>
        <!--<p>You can contact us in writing (by letter, fax or email) or by speaking with our complaints manager, Jodi Booth, whose email address is jodi.booth@quantalaw.co.uk.</p>-->
        <p>To help us to understand your complaint, and in order that we do not miss anything, please tell us:</p>
        <div class="basic-list">
            <ul>
                <li>Your full name and contact details</li>
                <li>What you think we have got wrong</li>
                <li>What you hope to achieve as a result of your complaint</li>
                <li>Your file reference number (if you have it)</li>
            </ul>
        </div>
        <p>If you require any help in making your complaint, we will try to help you.</p>
        <p class="h4">How will you deal with my complaint?</p>
        <p>We will record your complaint centrally.</p>
        <p>We will write to you within three working days acknowledging your complaint, enclosing a copy of this policy.</p>
        <p>We will investigate your complaint. This will usually involve:</p>
        <div class="basic-list">
            <ul>
                <li>Reviewing your complaint</li>
                <li>Reviewing your file(s) and other relevant documents</li>
                <li>Your file reference number (if you have it)</li>
            </ul>
        </div>
        <p>We may also need to ask you for further information or documents. If so, we will ask you to provide the information within a specific period of time.</p>
        <p>We will update you on the progress of your complaint at appropriate times.</p>
        <p>We may also, if appropriate, invite you to a meeting to discuss your complaint. You do not have to attend if you do not wish to or if you are unable to. We will be happy to discuss the matter with you on the telephone.</p>
        <p>We will write to you at the end of our investigation to tell you what we have done and what we propose to do to resolve your complaint. Where possible, we will aim to do this within 21 days of the date of our letter of acknowledgement although we do have eight weeks to respond to your complaint.</p>
        <p class="h4">What if I am not satisfied with the outcome?</p>
        <p>If you are unhappy with the outcome of our complaints handling procedure, please first let us know and we will review the matter.</p>
        <p>If you are still unhappy you can ask the Legal Ombudsman to look into your complaint. You can contact the Legal Ombudsman:</p>
        <div class="basic-list">
            <ul>
                <li>By post at PO Box 6806, Wolverhampton, WV1 9WJ</li>
                <li>By telephone: 0300 555 0333</li>
                <li>By email: enquiries@legalombudsman.org.uk</li>
            </ul>
        </div>
        <p>You must usually refer your complaint to the Legal Ombudsman within six months of our final written response to your complaint and within six years of the act or omission about which you are complaining occurring (or within three years of you becoming aware of it). Further details are available on the website: <a href="https://www.legalombudsman.org.uk" target="_blank">www.legalombudsman.org.uk</a>.</p>
        <p class="h4">What to do if you are unhappy with our behaviour</p>
        <p>The Solicitors Regulation Authority can help if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristics.</p>
        <p>Visit their website to see how you can raise your concerns with the Solicitors Regulation Authority: <a href="https://www.sra.org.uk/consumers/problems/report-solicitor/" target="_blank">https://www.sra.org.uk/consumers/problems/report-solicitor/</a>.</p>
        <p class="h4">What will it cost?</p>
        <p>We will not charge you for handling your complaint. Please note that if we have issued a bill for work done on the matter, and all or some of the bill is not paid, we may be entitled to charge interest on the amount outstanding.</p>
        <p>The Legal Ombudsman service is free of charge.</p>
    `
    $('#complaints_policy_modal .column').append(complaints_policy_modal_content);
});