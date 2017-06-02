/*
 * Websensor Sphere camera project
 * https://github.com/jessenie-intel/websensor-sphere
 *
 * Copyright (c) 2017 Jesse Nieminen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.

*/

var sensorfreq = 60;    //for setting desired sensor frequency

function startSensors() {
        try {
        //Accelerometer including gravity
        /*
        accelerometer = new Accelerometer({ frequency: sensorfreq, includeGravity: true });
        sensors.Accelerometer = accelerometer;
        gravity =  new LowPassFilterData(accelerometer, 0.8);
        accelerometer.onchange = event => {
                accel = {x:accelerometer.x, y:accelerometer.y, z:accelerometer.z};
                gravity.update(accel);
                accelNoG = {x:accel.x - gravity.x, y:accel.y - gravity.y, z:accel.z - gravity.z};
        }
        accelerometer.onerror = err => {
          accelerometer = null;
          console.log(`Accelerometer ${err.error}`)
        }
        accelerometer.start();
        */
        //AbsoluteOrientationSensor
        absoluteorientationsensor = new AbsoluteOrientationSensor({ frequency: sensorfreq});
        sensors.AbsoluteOrientationSensor = absoluteorientationsensor;
        absoluteorientationsensor.onchange = event => {
                absoluteorientationsensor.populateMatrix(orientationMat);
        }
        absoluteorientationsensor.onerror = err => {
          absoluteorientationsensor = null;
          console.log(`Absolute orientation sensor ${err.error}`)
        };
        absoluteorientationsensor.start();
        /*
        //Gyroscope
        gyroscope = new Gyroscope({ frequency: sensorfreq});
        sensors.Gyroscope = gyroscope;
        gyroscope.onchange = event => {
                velGyro = {x:gyroscope.x, y:gyroscope.y, z:gyroscope.z};
        }
        gyroscope.onerror = err => {
          gyroscope = null;
          console.log(`Gyroscope ${err.error}`)
        };
        gyroscope.start();
        */
        } catch(err) { console.log(err); }
        sensors_started = true;
        return sensors;
        }
