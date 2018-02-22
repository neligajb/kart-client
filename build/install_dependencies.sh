#!/usr/bin/env bash

pip install awscli
npm install
ng build --$DEPLOY_ENV
