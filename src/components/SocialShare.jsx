import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialShare = () => {
  // Şu anki sayfanın URL'sini al
  const currentUrl = window.location.href;
  const pageTitle = document.title;

  // Sosyal medya paylaşım linkleri
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="flex gap-4 mt-8">
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
        aria-label="Share on Facebook"
      >
        <FaFacebook size={32} />
      </a>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={32} />
      </a>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
    </div>
  );
};

export default SocialShare;
