l
<template>
  <div
    class="modal fade"
    id="authModal"
    tabindex="-1"
    aria-labelledby="authModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content" style="border: none">
        <div class="modal-header">
          <h5 class="modal-title" id="authModalLabel">Authentication</h5>
          <button
            type="button"
            class="btn-close border-0 bg-transparent fs-4 fw-bold"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs" id="authTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active no-border"
                id="signup-tab"
                data-bs-toggle="tab"
                data-bs-target="#signup"
                type="button"
                role="tab"
                aria-controls="signup"
                aria-selected="true"
              >
                Sign Up
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link no-border"
                id="login-tab"
                data-bs-toggle="tab"
                data-bs-target="#login"
                type="button"
                role="tab"
                aria-controls="login"
                aria-selected="false"
              >
                Login
              </button>
            </li>
          </ul>
          <div class="tab-content mt-3" id="authTabContent">
            <div
              class="tab-pane fade show active"
              id="signup"
              role="tabpanel"
              aria-labelledby="signup-tab"
            >
              <form @submit.prevent="signup">
                <div class="mb-3">
                  <label for="signupEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control no-border lowercase"
                    id="signupEmail"
                    v-model="signupEmail"
                    placeholder="Email"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="signupPassword" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control no-border"
                    id="signupPassword"
                    v-model="signupPassword"
                    placeholder="Password"
                    autocomplete="off"
                    required
                  />
                </div>
                <button type="submit" class="btn-primary2 my-2">Sign Up</button>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control no-border lowercase"
                    id="loginEmail"
                    v-model="loginEmail"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control no-border"
                    id="loginPassword"
                    v-model="loginPassword"
                    required
                  />
                </div>
                <button type="submit" class="btn-primary2 my-2">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "AuthModal",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      signupEmail: "",
      signupPassword: "",
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(
          auth,
          this.loginEmail,
          this.loginPassword
        );
        // Close modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("authModal")
        );
        modal.hide();
        this.$emit("authenticated");
      } catch (error) {
        console.log("Login failed: " + error.message);
      }
    },
    async signup() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.signupEmail,
          this.signupPassword
        );
        // Create user document in Firestore
        await setDoc(doc(db, "Users", userCredential.user.uid), {
          email: this.signupEmail,
          createdAt: new Date(),
        });
        // Close modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("authModal")
        );
        modal.hide();
        this.$emit("authenticated");
      } catch (error) {
        alert("Signup failed: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.btn-primary2 {
  background-color: #002c3e;
  border-color: #002c3e;
  color: white;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-border {
  border: none !important;
  border-bottom: 1px solid #dee2e6 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.no-border:focus {
  border-bottom: 2px solid #002c3e !important;
  outline: none !important;
}

.lowercase {
  text-transform: lowercase;
}
</style>
