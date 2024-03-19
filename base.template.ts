const baseTemplate = (header: string, content: string) => {
  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color-scheme: light;
        supported-color-schemes: light;
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;
      ">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <!-- <title>{{ title }}</title> -->
        <!-- CSS Reset : BEGIN -->
        <style>
          @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .email-container {
              min-width: 320px !important;
            }
          }
    
          @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .email-container {
              min-width: 375px !important;
            }
          }
    
          @media only screen and (min-device-width: 414px) {
            u~div .email-container {
              min-width: 414px !important;
            }
          }
        </style>
        <!-- CSS Reset : END -->
        <!-- Progressive Enhancements : BEGIN -->
        <style>
          @media screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              margin: auto !important;
            }
    
            .stack-column,
            .stack-column-center {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              direction: ltr !important;
            }
    
            .stack-column-center {
              text-align: center !important;
            }
    
            .center-on-narrow {
              text-align: center !important;
              display: block !important;
              margin-left: auto !important;
              margin-right: auto !important;
              float: none !important;
            }
    
            table.center-on-narrow {
              display: inline-block !important;
            }
    
            .email-container p {
              font-size: 17px !important;
            }
          }
        </style>
        <!-- Progressive Enhancements : END -->
      </head>
      <body width="100%" style="
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          mso-line-height-rule: exactly;
          background-color: #d01380;
          background-color: linear-gradient(90deg, #d01380 0%, #d9459b 100%);
          background-image: url(https://i.ibb.co/tmSfWsH/email-bg-overlay-left.png),
            url(https://i.ibb.co/fN1xhfg/email-bg-overlay-right.png),
            linear-gradient(90deg, #d01380 0%, #d9459b 100%);
          background-size: 100%, 100%, cover;
          background-repeat: no-repeat, no-repeat, no-repeat;
          background-position: top 72px left, top 72px right, center;
          margin: 0 auto;
          height: 100%;
          width: 100%;
          padding: 0;
        ">
        <center role="article" aria-roledescription="email" lang="en" style="
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            width: 100%;
            background-color: #d01380;
            background-color: linear-gradient(90deg, #d01380 0%, #d9459b 100%);
            background-image: url(https://i.ibb.co/tmSfWsH/email-bg-overlay-left.png),
              url(https://i.ibb.co/fN1xhfg/email-bg-overlay-right.png),
              linear-gradient(90deg, #d01380 0%, #d9459b 100%);
            background-size: 100%, 100%, cover;
            background-repeat: no-repeat, no-repeat, no-repeat;
            background-position: top 72px left, top 72px right, center;
          ">
          <!-- Visually Hidden Preheader Text : BEGIN -->
          <div style="
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              max-height: 0;
              overflow: hidden;
              mso-hide: all;
            " aria-hidden="true">
            <!-- {{ preheader }} -->
          </div>
          <!-- Visually Hidden Preheader Text : END -->
          <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
          <!-- Preview Text Spacing Hack : BEGIN -->
          <div style="
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            display: none;
            font-size: 1px;
            line-height: 1px;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            font-family: sans-serif;
            ">
            <!-- &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;  -->
          </div>
          <!-- Preview Text Spacing Hack : END -->
          <!-- Email Body : BEGIN -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              position: relative;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-spacing: 0;
              border-collapse: collapse;
              table-layout: fixed;
              margin: 0 auto;
            " class="email-container">
            <!-- Email Header : BEGIN -->
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              <td style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  padding: 40px 0 0 0;
                  text-align: center;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                " align="center">
                <img src="https://i.ibb.co/x2xKG4Q/email-space-logo.png" style="
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    -ms-interpolation-mode: bicubic;
                    color: #ffffff;
                  " width="180" height="52" alt="Space App Powered by SALT" border="0">
              </td>
            </tr>
            <!-- Email Header : END -->
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              
              ${header}

            </tr>
            <!-- Hero Image, Flush : BEGIN -->
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              <td style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  padding: 32px;
                  text-align: center;
                  vertical-align: middle;
                  background-color: #ffffff;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                " align="center" valign="middle" bgcolor="#ffffff">
                <img src="https://i.ibb.co/3ShgBWH/email-icon.png" width="120" height="120" alt border="0" style="
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    -ms-interpolation-mode: bicubic;
                  ">
              </td>
            </tr>
            <!-- Hero Image, Flush : END -->
            <!-- 1 Column Text + Button : BEGIN --> 
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              <td style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  background-color: #ffffff;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                " bgcolor="#ffffff">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-spacing: 0;
                    border-collapse: collapse;
                    table-layout: fixed;
                    margin: 0 auto;
                  ">
                  
                  ${content}

                  <tr style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    ">
                    <td style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        padding: 0 36px 24px 36px;
                        font-family: sans-serif;
                        font-size: 14px;
                        line-height: 20px;
                        color: #555555;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                      ">
                      <p style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          margin: 0;
                        "> Happy Working! </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- 1 Column Text + Button : END -->
            <!-- Background Image with Text : BEGIN -->
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              <td valign="middle" style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  text-align: center;
                  background-color: #f2d5e5;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  background-position: center center;
                  background-size: cover;
                " align="center" bgcolor="#f2d5e5">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-spacing: 0;
                    border-collapse: collapse;
                    table-layout: fixed;
                    margin: 0 auto;
                  ">
                  <tr style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    ">
                    <td valign="middle" style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        text-align: center;
                        padding: 20px;
                        font-family: sans-serif;
                        font-size: 12px;
                        color: #333333;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                      " align="center">
                      <p style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          margin: 0;
                        "> This email service is provided by SPACE. </p>
                      <p style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          margin: 0;
                          margin-top: 12px;
                        "> @ ${currentYear} PT Ako Media Asia. All rights reserved. </p>
                    </td>
                  </tr>
                  <tr style="
                      -ms-text-size-adjust: 100%;
                      -webkit-text-size-adjust: 100%;
                    ">
                    <td valign="middle" style="
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        padding: 0 0 20px 0;
                        text-align: center;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                      " align="center">
                      <a href="https://play.google.com/store/apps/details?id=salt.id.space.android" style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          text-decoration: none;
                          margin-right: 12px;
                        ">
                        <img src="https://i.ibb.co/qgghQT0/email-googleplay.png" width="84" height="25" alt="Get it on Google Play" border="0" style="
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                            -ms-interpolation-mode: bicubic;
                          ">
                      </a>
                      <a href="https://apps.apple.com/id/app/space-apps/id6462989392" style="
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          text-decoration: none;
                        ">
                        <img src="https://i.ibb.co/d0ZvH10/email-appstore.png" width="84" height="25" alt="Available on the App Store" border="0" style="
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                            -ms-interpolation-mode: bicubic;
                          ">
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%">
              <td style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  padding: 0 0 40px 0;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                "></td>
            </tr>
            <!-- Background Image with Text : END -->
          </table>
        </center>
      </body>
    </html>
  `;
};

export default baseTemplate;
