<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng quản lý danh bạ</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{name: 'Contactbook'}" class="nav-link">
                        Danh bạ
                        <i class="fas fa-address-book"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
    nav{
        margin-bottom: 16px;
    }
</style>