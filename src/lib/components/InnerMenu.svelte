<script>
  let { language } = $props()
</script>



<ul class="menu bg-base-200 text-[1.1rem] shadow-xl rounded-box w-80 mt-2 mr-3 ml-auto absolute right-0">
    <li>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        {language == "filipino" ? "Tahanan" : "Home"}
      </a>
    </li>
    <li>
      <a href="https://reachoutworld.org/reachout-world/campaigns">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        ReachOut Worldwide Campaigns
      </a>
    </li>
    
    
</ul>

<style>
    ul {
        animation: dropdownFadeIn 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes dropdownFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
</style>