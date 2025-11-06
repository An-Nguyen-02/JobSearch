// Import and register all your controllers from the importmap via controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import { application } from "./application.js"

import ReactController from "./react_controller.jsx"
application.register("react", ReactController)

eagerLoadControllersFrom("controllers", application)
