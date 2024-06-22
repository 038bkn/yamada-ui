import { Icon } from "@yamada-ui/react"
import type { IconProps } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Logo = forwardRef<SVGSVGElement, IconProps>(({ ...rest }, ref) => {
  return (
    <Icon
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 913 196"
      {...rest}
    >
      <path
        d="M95.4499 0H100.521C105.565 0.195483 109.752 0.567222 113.081 1.11522C117.34 1.81383 122.177 2.9659 127.593 4.57143C130.711 5.49437 133.747 6.60798 136.702 7.91227C154.221 15.6291 168.393 27.3741 179.218 43.1474C181.599 46.618 184.065 50.9859 186.616 56.2512C188.055 59.2283 189.282 62.183 190.298 65.1152C197.921 87.1087 197.901 109.088 190.235 131.052C189.165 134.116 187.922 137.108 186.505 140.027C176.43 160.803 161.028 176.252 140.297 186.376C137.362 187.808 134.449 189.037 131.559 190.063C109.412 197.898 87.2703 197.978 65.1333 190.303C57.6684 187.712 50.0784 183.78 43.6661 179.569C39.5771 176.884 35.4705 173.618 31.3463 169.773C19.6465 158.874 11.1112 145.992 5.74036 131.129C4.4938 127.678 3.26486 123.238 2.05354 117.809C-0.133561 108.013 -0.460424 97.5574 0.539393 87.6166C1.0361 82.6975 2.10802 77.2384 3.75515 71.2393C5.75478 63.9519 8.62926 56.9674 12.3786 50.2857C13.7854 47.7829 15.1777 45.5172 16.5557 43.4887C20.9139 37.0633 25.8985 31.2437 31.5097 26.0297C34.9754 22.8139 38.9122 19.7086 42.7192 17.0455C44.8149 15.581 47.4266 13.9787 50.5543 12.2385C56.316 9.02749 62.1739 6.48781 68.128 4.6195C77.0334 1.82184 86.1407 0.282009 95.4499 0ZM154.074 37.4367C146.57 30.5339 137.572 24.6598 127.905 21.0401C121.589 18.6719 115.63 17.0872 110.029 16.286C96.0251 14.2831 82.3129 15.7412 68.8923 20.6604C66.1331 21.6746 63.6192 22.9389 60.9947 24.1598C58.4038 25.3664 56.1302 26.8806 53.6595 28.3323C52.7334 28.8771 51.8249 29.4795 50.934 30.1397C48.7421 31.7693 46.43 33.3844 44.4352 35.1534C43.288 36.1724 42.0991 37.2332 40.8685 38.3356C38.2056 40.7246 35.9608 43.5511 33.6199 46.2815C33.6059 46.2986 33.5959 46.3188 33.591 46.3403C33.586 46.3618 33.5861 46.384 33.5913 46.4052C33.5964 46.4263 33.6065 46.4458 33.6207 46.4619C33.6349 46.478 33.6527 46.4903 33.6727 46.4978L148.161 89.3423C148.265 89.3813 148.375 89.3963 148.484 89.3863C148.594 89.3763 148.698 89.3416 148.791 89.2847L176.238 72.3882C176.294 72.3545 176.336 72.3028 176.359 72.2417C176.382 72.1806 176.383 72.1136 176.363 72.0517C173.376 63.2133 169.166 55.1904 163.731 47.9832C160.943 44.2914 157.506 40.5949 154.074 37.4367ZM131.717 99.7927C131.836 99.719 131.829 99.6565 131.698 99.6052L25.0301 59.6833C24.9243 59.6449 24.8474 59.6769 24.7994 59.7795C24.1104 61.244 23.4022 62.7133 22.6748 64.1875C22.0242 65.5046 21.4042 66.9787 20.8145 68.6099C19.1257 73.2854 17.8455 77.7864 16.9739 82.1127C15.1954 90.9415 14.955 100.137 16.2529 109.7C16.6855 112.895 17.3376 116.035 18.2092 119.122C19.4398 123.461 20.6239 126.978 21.7615 129.673C23.806 134.512 26.2478 139.13 29.087 143.526C29.9619 144.882 31.2085 146.59 32.8267 148.651C33.8682 149.981 34.9465 151.25 36.0617 152.458C37.1929 153.682 38.3049 154.93 39.3977 156.202C39.4625 156.276 39.5508 156.325 39.6468 156.34C39.7429 156.355 39.8403 156.335 39.9216 156.284L131.717 99.7927ZM73.401 176.815C79.5377 178.712 86.2881 179.906 93.6521 180.396C96.7606 180.604 99.9699 180.587 103.28 180.343C107.561 180.026 111.336 179.532 114.605 178.863C119.466 177.866 124.584 176.251 129.958 174.017C133.01 172.743 136.197 171.335 139.024 169.595C141.119 168.311 143.278 167.1 145.272 165.643C148.051 163.618 149.908 162.198 150.844 161.384C156.368 156.59 160.866 151.857 164.336 147.185C167.086 143.486 169.665 139.248 172.075 134.47C174.286 130.081 176.18 124.818 177.459 120.395C180.458 110.003 181.298 99.3328 179.978 88.3857C179.962 88.2383 179.89 88.2031 179.761 88.28L52.5154 166.6C52.4875 166.616 52.4642 166.639 52.448 166.667C52.4319 166.695 52.4234 166.726 52.4234 166.759C52.4234 166.791 52.4319 166.822 52.448 166.85C52.4642 166.878 52.4875 166.901 52.5154 166.917C55.2313 168.494 57.7933 170.21 60.6149 171.59C65.3096 173.891 69.5716 175.632 73.401 176.815Z"
        fill="currentColor"
      />
      <path
        d="M648.506 150.809C646.883 152.465 645.228 153.898 643.541 155.107C638.836 158.472 633.587 160.101 627.792 159.995C622.303 159.892 617.237 158.645 612.586 155.466C608.009 152.341 604.52 148.536 602.118 144.051C601.39 142.695 600.693 141.196 600.026 139.553C596.947 131.979 596.379 123.275 597.596 114.853C598.828 106.314 603.273 97.882 609.666 92.4543C615.349 87.6274 621.992 85.4159 629.596 85.8199C634.507 86.0766 639.625 88.0279 643.608 91.2065C645.315 92.569 646.949 94.0479 648.51 95.6432C648.655 95.7904 648.727 95.7578 648.727 95.5456V36.1284C648.727 36.0428 648.767 36 648.847 36H663.759C663.92 36 664 36.0856 664 36.2568V157.828C664 157.999 663.92 158.085 663.759 158.085H648.967C648.807 158.085 648.727 157.999 648.727 157.828V150.911C648.727 150.689 648.653 150.655 648.506 150.809ZM647.346 111.541C646.022 108.713 644.284 106.348 642.132 104.445C639.944 102.507 637.255 101.28 634.064 100.763C631.194 100.297 628.361 100.477 625.564 101.302C624.115 101.733 622.686 102.459 621.278 103.479C619.89 104.486 618.751 105.543 617.863 106.653C615.655 109.426 613.803 113.287 613.144 116.979C611.964 123.61 612.695 129.755 615.337 135.414C616.457 137.803 618.094 139.916 620.249 141.75C622.276 143.469 624.58 144.575 627.161 145.068C631.385 145.869 635.322 145.381 638.971 143.604C643.657 141.324 646.865 136.636 648.462 131.491C649.718 127.455 649.775 122.35 649.237 118.145C648.932 115.786 648.302 113.585 647.346 111.541Z"
        fill="currentColor"
      />
      <path
        d="M284.765 90.5792C284.778 90.6049 284.798 90.6264 284.821 90.6413C284.845 90.6563 284.872 90.6641 284.899 90.6641C284.927 90.6641 284.954 90.6563 284.977 90.6413C285.001 90.6264 285.021 90.6049 285.034 90.5792L308.679 46.4144C308.765 46.2531 308.895 46.1724 309.068 46.1724H326.346C326.503 46.1724 326.65 46.1347 326.788 46.0592C326.836 46.0317 326.889 46.0129 326.947 46.0026C327.001 45.9923 327.014 46.0129 326.985 46.0643L292.938 109.156C292.784 109.444 292.707 109.753 292.707 110.083V157.743C292.707 157.914 292.627 158 292.467 158H277.207C277.047 158 276.967 157.914 276.967 157.743C276.967 142.043 276.971 126.355 276.981 110.68C276.981 109.963 276.814 109.293 276.481 108.672C264.158 85.5982 253.078 64.9708 243.241 46.7901C243.174 46.67 243.108 46.5482 243.044 46.4247C242.955 46.2565 243.001 46.1724 243.184 46.1724H260.87C261.034 46.1724 261.155 46.2479 261.235 46.3989L284.765 90.5792Z"
        fill="currentColor"
      />
      <path
        d="M812.156 127.543C812.645 129.714 813.645 132.448 814.972 134.382C819.355 140.798 825.356 144.083 832.975 144.238C835.163 144.284 838.3 143.862 840.492 143.181C845.823 141.537 849.965 138.097 852.918 132.86C853.409 131.99 853.95 130.555 854.541 128.554C854.978 127.082 855.296 125.588 855.494 124.072C856.03 119.987 856.301 115.912 856.308 111.848C856.327 90.5811 856.327 68.7264 856.308 46.2837C856.308 46.0946 856.394 46 856.566 46H871.759C871.919 46 871.998 46.0842 871.998 46.2527C872.002 69.5654 872 93.0121 871.994 116.593C871.99 121.579 871.51 126.114 870.552 130.199C869.437 134.949 867.191 140.184 864.17 144.161C860.627 148.83 856.715 152.44 852.434 154.992C842.211 161.078 828.915 161.496 818.137 156.905C813.2 154.806 808.814 151.139 805.051 146.956C799.626 140.932 796.317 132.984 795.422 124.727C795.131 122.065 794.991 118.957 795 115.402C795.045 92.2643 795.048 69.2318 795.01 46.3043C795.01 46.1014 795.103 46 795.288 46H810.471C810.634 46 810.715 46.086 810.715 46.2579C810.706 68.6078 810.706 90.9662 810.715 113.333C810.718 118.567 811.199 123.303 812.156 127.543Z"
        fill="currentColor"
      />
      <path
        d="M913 46.2166V157.783C913 157.841 912.978 157.896 912.94 157.937C912.901 157.977 912.849 158 912.795 158H897.205C897.151 158 897.099 157.977 897.06 157.937C897.022 157.896 897 157.841 897 157.783V46.2166C897 46.1592 897.022 46.1041 897.06 46.0635C897.099 46.0228 897.151 46 897.205 46H912.795C912.849 46 912.901 46.0228 912.94 46.0635C912.978 46.1041 913 46.1592 913 46.2166Z"
        fill="currentColor"
      />
      <path
        d="M372.521 150.698C367.386 155.668 361.61 159.408 354.516 159.911C343.699 160.686 334.856 156.392 327.986 147.03C326.895 145.54 325.724 143.372 324.473 140.525C323.423 138.139 322.652 135.753 322.158 133.366C320.608 125.896 320.614 118.539 322.177 111.293C323.435 105.466 326.077 100.173 330.104 95.4143C333.829 91.0084 338.09 88.0307 342.887 86.4814C347.899 84.8628 352.764 84.5706 357.48 85.6047C359.714 86.0975 362.751 87.2802 364.849 88.5875C367.724 90.372 370.314 92.5698 372.618 95.1809C372.733 95.3158 372.789 95.2898 372.786 95.1031C372.706 92.4782 372.685 89.8567 372.723 87.2387C372.727 87.0831 372.8 87.0053 372.945 87.0053H387.807C387.936 87.0053 388 87.0745 388 87.2128V157.815C388 157.988 387.92 158.075 387.759 158.075H372.954C372.791 158.075 372.709 157.987 372.709 157.81L372.733 150.802C372.733 150.598 372.662 150.563 372.521 150.698ZM338.224 112.513C338.073 112.862 337.949 113.209 337.853 113.555C335.742 121.164 336.208 128.319 339.253 135.021C340.203 137.114 341.792 139.244 344.018 141.412C344.359 141.744 344.726 142.031 345.121 142.274C346.237 142.969 347.161 143.716 348.432 144.151C354.169 146.13 359.561 145.585 364.609 142.517C365.648 141.884 366.457 141.018 367.338 140.204C367.967 139.619 368.538 138.947 369.051 138.186C370.61 135.876 371.714 133.657 372.362 131.53C373.854 126.619 374.017 121.311 372.849 115.604C371.693 109.95 367.617 103.808 362.698 101.582C358.116 99.5073 353.393 99.3413 348.528 101.084C347.44 101.473 346.492 102.179 345.506 102.781C342.329 104.731 339.831 108.726 338.224 112.513Z"
        fill="currentColor"
      />
      <path
        d="M422.388 93.4682C425.287 90.1583 429.14 86.3303 433.521 85.4963C439.815 84.2946 445.355 85.4376 450.141 88.9254C452.335 90.5243 454.267 92.6498 455.937 95.3019C456.028 95.4435 456.12 95.4453 456.214 95.3071C459.063 91.0561 462.753 88.1243 467.283 86.5116C473.245 84.393 480.05 84.4241 485.934 87.0969C486.922 87.5458 487.814 88.0517 488.609 88.6146C490.845 90.2032 492.604 92.175 493.887 94.5301C495.538 97.5587 496.648 100.763 497.217 104.144C497.823 107.734 497.978 111.624 497.983 115.317C498.002 128.937 498.005 143.073 497.992 157.725C497.989 157.908 497.902 158 497.73 158H482.837C482.678 158 482.599 157.917 482.599 157.751C482.599 146.366 482.606 134.984 482.618 123.605C482.628 117.581 482.837 111.298 480.937 105.724C479.954 102.851 478.14 101.045 475.494 100.306C473.419 99.7256 471.345 99.717 469.271 100.28C464.317 101.621 462.238 105.885 461.225 110.883C460.43 114.799 460.319 119.601 460.314 123.838C460.311 134.119 460.312 145.414 460.319 157.725C460.319 157.908 460.233 158 460.062 158H445.158C444.993 158 444.911 157.91 444.911 157.731C444.937 144.076 444.935 130.655 444.906 117.467C444.9 113.309 444.302 109.578 443.113 106.273C442.061 103.352 440.05 100.958 437.239 100.218C435.707 99.8171 434.05 99.7757 432.266 100.093C429.547 100.575 427.473 101.808 425.805 104.336C424.426 106.422 423.524 108.728 423.101 111.256C422.564 114.444 422.291 118.056 422.282 122.093C422.259 134.891 422.259 146.773 422.282 157.741C422.282 157.914 422.201 158 422.039 158H407.242C407.081 158 407 157.914 407 157.741V87.2937C407 87.1211 407.081 87.0348 407.242 87.0348H422.03C422.191 87.0348 422.272 87.1228 422.272 87.2989L422.257 93.4113C422.257 93.5494 422.301 93.5684 422.388 93.4682Z"
        fill="currentColor"
      />
      <path
        d="M565.291 94.8411C565.573 95.1591 565.714 95.0986 565.714 94.6597L565.719 87.2669C565.722 87.0941 565.803 87.0077 565.96 87.0077H580.759C580.92 87.0077 581 87.0941 581 87.2669V157.773C581 157.946 580.92 158.033 580.759 158.033H565.96C565.799 158.033 565.719 157.946 565.719 157.773V150.883C565.72 150.844 565.709 150.805 565.689 150.772C565.669 150.739 565.64 150.713 565.605 150.697C565.571 150.682 565.533 150.678 565.496 150.685C565.459 150.692 565.424 150.711 565.397 150.738C557.311 158.992 547.984 161.729 537.415 158.95C529.021 156.747 521.34 149.65 517.827 141.235C517.028 139.312 516.171 137.472 515.651 135.424C514.015 128.985 513.595 122.47 514.391 115.879C514.782 112.641 515.435 109.743 516.349 107.185C517.617 103.649 519.083 100.731 520.748 98.4287C524.084 93.8198 527.799 90.2427 532.751 87.749C536.327 85.9449 540.697 85.0999 544.581 85.0065C552.474 84.8199 559.824 88.6407 565.291 94.8411ZM531.577 111.685C531.237 112.442 530.955 113.223 530.73 114.028C528.969 120.322 529.195 126.666 531.409 133.06C531.967 134.681 532.758 136.189 533.781 137.586C534.763 138.92 535.878 140.202 537.126 141.432C537.839 142.132 538.633 142.557 539.432 143.112C539.98 143.492 540.601 143.809 541.294 144.061C545.635 145.654 549.978 145.678 554.322 144.133C555.733 143.636 557.836 142.48 558.823 141.655C562.591 138.508 565.397 133.189 566.167 128.078C566.992 122.586 566.666 117.588 565.19 113.085C564.128 109.836 562.081 106.729 559.049 103.763C558.341 103.069 557.542 102.69 556.743 102.156C556.175 101.773 555.569 101.456 554.924 101.207C551.648 99.939 548.286 99.5934 544.836 100.171C541.872 100.668 539.268 101.925 537.025 103.94C534.827 105.917 533.011 108.498 531.577 111.685Z"
        fill="currentColor"
      />
      <path
        d="M732.692 94.8934V87.2576C732.692 87.0847 732.773 86.9982 732.934 86.9982H747.759C747.92 86.9982 748 87.0847 748 87.2576V157.806C748 157.979 747.92 158.065 747.759 158.065H732.934C732.77 158.065 732.688 157.979 732.688 157.806L732.697 150.824C732.697 150.592 732.62 150.557 732.466 150.72C728.17 155.176 722.409 158.786 716.556 159.663C709.97 160.648 702.801 159.507 697.092 155.793C691.509 152.162 687.321 147.144 684.528 140.739C681.437 133.653 680.637 125.95 681.138 118.143C681.662 110.009 684.255 102.896 688.915 96.8023C692.653 91.9158 697.084 88.5458 702.207 86.6922C704.236 85.9625 706.577 85.4489 709.232 85.1515C714.969 84.5083 720.827 85.9296 725.697 89.0991C727.837 90.4893 730.105 92.4484 732.5 94.9764C732.628 95.1147 732.692 95.0871 732.692 94.8934ZM728.151 139.411C728.951 138.55 729.501 137.471 730.185 136.491C730.671 135.799 731.071 135.045 731.386 134.229C734.131 127.064 734.359 119.979 732.07 112.977C730.316 107.596 727.161 103.79 722.606 101.559C719.141 99.8612 715.236 99.4635 710.891 100.366C708.358 100.895 706.04 102.106 703.938 103.997C698.664 108.749 696.403 115.824 696.61 123.113C696.703 126.495 697.134 129.401 697.902 131.833C698.969 135.225 700.928 138.357 703.779 141.227C705.018 142.477 707.154 143.701 708.798 144.262C713.478 145.87 718.081 145.655 722.606 143.618C724.467 142.781 726.315 141.379 728.151 139.411Z"
        fill="currentColor"
      />
    </Icon>
  )
})

Logo.displayName = "Logo"