import { Controller } from "@hotwired/stimulus";
import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../query_client.js';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Notification from "../src/components/common/Notification.jsx";

const components = {
  Notification: {skeleton: null, component: Notification}
}
export default class ReactController extends Controller {
    static values = {
        class: String,
        props: String
    };

    connect() {

        const Component = components[this.classValue].component;
        let props = this.propsValue || {};

        if (typeof props === "string") {
            props = JSON.parse(props);
        }

        let Skeleton = components[this.classValue].skeleton;
        this.root = createRoot(this.element);
        this.root.render(
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div className="fallback-lazy-load">{Skeleton}</div>}>
              <Component {...props} />
            </Suspense>
            {import.meta.env.MODE === "development" && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        )

        this.element.addEventListener("react:unmount", this.unmountComponent);
    }

    disconnect() {
        this.unmountComponent();
        this.element.removeEventListener("react:unmount", this.unmountComponent);
    }

    unmountComponent = () => {
      if (this.root) {
        this.root.unmount();
        this.root = null;
      }
    };
}

window.Notification = Notification;