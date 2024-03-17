// import baseTemplate from './base.template';

const invitationEmployeeTemplate = (name: string, url: string) => {
  const header = `
    <td style="
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-family: sans-serif;
      color: #ffffff;
      padding: 28px 0;
      text-align: center;
      font-size: 14px;
      font-weight: normal;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    " align="center">
      <h2 style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        margin: 0;
        font-weight: normal;
      "> Hi <b style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      ">${name}</b>, </h2>
      <h2 style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        margin: 0;
        font-weight: normal;
      "> you are invited to join SALT Space Apps! </h2>
    </td>
  `;

  const content = `
    <tr style="
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    ">
      <td style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        padding: 0 36px 18px 36px;
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
        "> Dear ${name}, you are invited to join SALT Space Apps. Please follow the link below: </p>
      </td>
    </tr>


    <tr style="
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    ">
      <td style="
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        padding: 0 0 24px 0;
        font-family: sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #555555;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      ">

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="left" style="
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
            <td style="
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              padding: 0 36px 18px 36px;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            " valign="top">
              <p style="
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                margin: 0 0 12px 0;
              ">
                <a style="
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  color: #0970cd;
                  text-decoration: underline;
                  word-wrap: break-word;
                  word-break: break-all;
                  "
                  href="${url}"
                >
                  ${url}
                </a>
              </p>
            </td>
          </tr>
          <tr style="
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          ">
            <td style="
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              padding: 0 36px 18px 36px;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            " valign="top">
              <p style="
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                margin: 0 0 12px 0;
              "> If there is something wrong with the link, please do not hesitate to contact the HR. </p>
            </td>
          </tr>
          <tr style="
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          ">
            <td style="
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              padding: 0 0 0 36px;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            " valign="top">
              <p style="
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                margin: 0 0 12px 0;
              "> Thank You </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  // return baseTemplate(header, content);
};

export default invitationEmployeeTemplate;