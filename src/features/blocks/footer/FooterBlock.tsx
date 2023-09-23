import React from 'react';
import TwitterIcon from '../../ui/images-and-icons/icons/TwitterIcon';
import LinkedInIcon from '../../ui/images-and-icons/icons/LinkedInIcon';

export interface FooterBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

const FooterBlock = (props: FooterBlockProps) => {
  const { className = '', ...restProps } = props;

  return (
    <footer role="contentinfo" className={`text-center py-8 ${className}`} {...restProps}>
      <div className="flex justify-center">
        <ul className="flex items-center space-x-4">
          <li className="mr-4">
            <a href="https://twitter.com/" title="Link to Twitter Profile">
              <TwitterIcon className="h-16" />
            </a>
          </li>
          <li className="mr-4">
            <a href="https://github.com/Saif8599" title="Link to Github Profile">
            github
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.instagram.com/blacky_cherry/" title="Link to Instagram Profile">
            instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/saif-muhamad-b919371b5/" title="Link to LinkedIn Profile">
              <LinkedInIcon className="h-16" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <iframe src="" frameBorder="0" scrolling="0" width="84" height="20" title="Watch Portfolio Template on GitHub"></iframe>
      </div>
    </footer>
  );
};

export default FooterBlock;
