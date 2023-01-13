import './style.css'
import { supabase } from './supabase.js'

async function getTweets() {
    // Get data from database
    const { data, error } = await supabase
        .from('tweets')
        .select(`
        id,
        message,
        created_at,
        user (
            username,
            name
        )
        `)

    if (error) {
        console.log(error)
    }

    const listEl = document.querySelector('ul')

    // LOOP over tweets
    for (const i of data) {
        console.log(i)
        const itemEL = document.createElement('li')
        itemEL.classList.add('flex', 'gap-4', 'border-b', 'pb-6')

        itemEL.innerHTML = `
        <div class="w-14 h-14 rounded-full">
          <img src="bird.png" alt="">
        </div>
        <div>
          <div class="flex gap-2 text-gray-500">
            <span class="font-semibold text-black">${i.user.name}</span>
            <span>@${i.user.username}</span>
            <span>${new Date(i.created_at).toLocaleString()}</span>
          </div>
          <p>${i.message}</p>

          <button class="flex items-center gap-2 mt-1  hover:text-red-300">
            <i class="ph-heart text-xl"></i>
            <span class="text-sm">0</span>
          </button>
        </div>
      `

        listEl.appendChild(itemEL)
    }
}

getTweets()