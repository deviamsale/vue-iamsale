<template>
    <header class="header">
        <section class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 ">
                        <div class="header-top-left">
                            <ul class="header-top-info">
                                <li class="header-top-info-item">
                                    <span><i class="far fa-envelope"></i>mail: koparion@gmail.com </span>
                                </li>
                                <li class="header-top-info-item">
                                    <span><i class="fas fa-mobile"></i>Hotline: 098654321 </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="header-top-right">
                            <ul class="header-top-info">
                                <li class="header-top-info-item">
                                    <a href=""><i class="far fa-user"></i>Đăng ký</a>
                                </li>
                                <li class="header-top-info-item">
                                    <a href=""><i class="fas fa-sign-in-alt"></i>Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="header-center">
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <button class="navbar-toggle" id="btn-toggle">
                            <span></span>
                        </button>

                        <div class="header-logo">
                            <a href="index.php">
                                <img src="/static/images/logo/logo.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-xs-8 col-sm-6 col-md-4 col-md-push-4">
                        <ul class="header-btn-groups">
                            <li>
                                <a href="#">
                                    <i class="fas fa-heart"></i><strong class="hidden-xs hidden-sm">Yêu thích</strong><span class="badge">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-shopping-bag"></i><strong class="hidden-xs hidden-sm">Giỏ hàng</strong><span class="badge">3</span>
                                </a>
                            </li>
                            <li class="hidden-md hidden-lg">
                                <a href="#" id="btn-search-toggle">
                                    <i class="fas fa-search"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-4">
                        <div class="header-search" id="header-search-box">
                            <form action="" class="header-search-form">
                                <div class="input-group">
                                    <input type="text" class="form-control input-lg" placeholder="Nhập từ khóa cần tìm ... ">
                                    <span class="input-group-btn">
                                    <button class="btn btn-default btn-lg" type="button"><i class="fas fa-search"></i></button>
                                </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <header class="header-navbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="header-menu">
                            <nav class="menu" id="menu">
                                <ul class="menubar ">
                                    <li class="hidden-md hidden-lg item-top-menu"><a href="/user-register"><i class="fas fa-user-plus"></i>Đăng
                                        ký</a></li>
                                    <li class="hidden-md hidden-lg item-top-menu"><a href="/user-login"><i class="fas fa-sign-in-alt"></i>Đăng
                                        nhập</a></li>
                                    <li class="  ">
                                        <a href="index.php">
                                            <span>Trang chủ</span>
                                        </a>

                                    </li>
                                    <li class="">
                                        <a href="about.php">
                                            <span>Về chúng tôi</span>
                                        </a>

                                    </li>
                                    <li class="has-submenu  ">
                                        <a href="san-pham.php">
                                            <span>Sản phẩm</span>
                                            <i class="icon-first-submenu"></i>
                                        </a>

                                        <ul class="submenu">
                                            <li class="has-second-submenu ">
                                                <a href="">
                                                    <span> Thời Trang Nữ</span>
                                                    <i class="icon-second-submenu"></i>
                                                </a>
                                                <ul class="second-submenu">
                                                    <li>
                                                        <a class="" href="chan-vay">
                                                            <span>Chân Váy</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="" href="quan-jeans-nu">
                                                            <span>Quần Jeans nữ</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="" href="ao-nu">
                                                            <span>Áo Nữ</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="has-second-submenu ">
                                                <a href="">
                                                    <span> Thời Trang Nam</span>
                                                    <i class="icon-second-submenu"></i>
                                                </a>
                                                <ul class="second-submenu">
                                                    <li>
                                                        <a class="" href="">
                                                            <span>Áo Thun Nam</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="" href="ao-so-mi-nam">
                                                            <span>Áo sơ mi nam</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="" href="">
                                                            <span>Quần Jean Nam</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="post.php">
                                        <router-link to="tin-tuc">
                                            <span>Tin tức</span>
                                        </router-link>

                                    </li>
                                    <li class="contact.php">
                                        <a href="contact">
                                            <span>Liên hệ</span>
                                        </a>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </header>
</template>