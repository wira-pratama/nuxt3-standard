<template>
    <nav aria-label="primary menu" class="navbar bg-base-100">
        <div class="flex-1">
            <NuxtLink to="/" class="btn btn-ghost text-xl font-primary">daisyUI</NuxtLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink class="font-primary">Hubungi Kami</NuxtLink>
                </li>
                <li class="w-48">
                    <details>
                        <summary class="font-primary">
                            Lebih Lanjut
                        </summary>
                        <ul class="w-48 p-2 bg-base-200 rounded-t-none">
                            <li>
                                <NuxtLink to="/" ref="next" class="font-primary">Tentang Kami</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/" ref="next" class="font-primary">Aktivitas Kami</NuxtLink>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </nav>
</template>