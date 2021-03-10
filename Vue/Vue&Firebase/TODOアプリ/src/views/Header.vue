<template>
  <div class="myheader">  
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-brand to="/">HOME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/about" active-class="link--active">About</b-nav-item>
            <b-nav-item to="/list" active-class="link--active">List</b-nav-item>
            <b-nav-item to="/comment" active-class="link--active">Comment</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.myheader {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.link--active {
  color: white;
  transition: transform 0.5s;
  animation: switch-nav 0.5s;
  font-size: 18px;
  font-weight: bold;
}

.navbar-nav {
  font-size: 0;
	box-sizing: border-box;
	width: 100%;
	padding: 4px;
	list-style: none;
	text-align: center;
}

.nav-item {
  font-size: 16px;
	margin: 0 8px;
	display: inline-block;
}

.nav-link {
	text-decoration: none;
	padding-bottom: 3px;
	color: #fff;
	display: block;
	position: relative;
  &:hover {
    color: #fff;
    &::before {
      width: 50%;
      border-bottom: 2px solid #fff;
    }

    &::after {
      width: 50%;
      border-bottom: 2px solid #fff;
    }
  }

  &::before {
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    transition: all 0.3s ease;
    border-bottom: 2px solid #fff;
    position: absolute;
    display: block;
  }

  &::after {
    content: '';
    width: 0;
    right: 50%;
    bottom: 0;
    transition: all 0.3s ease;
    border-bottom: 2px solid #fff;
    position: absolute;
    display: block;
  }
}

@keyframes switch-nav {
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1.1);
  }
}
</style>