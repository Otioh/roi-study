import React from 'react'

function Footer() {
  return (

      <footer class="footer-section spad pb-0">
        <div class="footer-bottom">
          <div class="footer-warp">
            <ul class="footer-menu">
              <li>
                <a href="/#">Terms & Conditions</a>
              </li>
              <li>
                <a href="/#">Register</a>
              </li>
              <li>
                <a href="/#">Privacy</a>
              </li>
            </ul>
            <div class="copyright">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | powered by{" "}
              <a
                href="https://roicomsatict.com"
                target="_blank"
                rel="noreferrer"
              >
                Roicomsat
              </a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </div>
          </div>
        </div>
      </footer>
    
  );
}

export default Footer