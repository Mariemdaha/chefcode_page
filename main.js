// ChefCode Landing Page - Main JavaScript

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollAnimations();
    initVoiceCommands();
    initDashboard();
    initForecasting();
    initCounters();
    initSmoothScroll();
});

// Particle animation for hero section
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(particle);
    }
    
    // Animate particles
    anime({
        targets: '.floating-particle',
        translateY: function() {
            return anime.random(-20, 20);
        },
        translateX: function() {
            return anime.random(-20, 20);
        },
        opacity: function() {
            return anime.random(0.3, 0.8);
        },
        duration: function() {
            return anime.random(2000, 4000);
        },
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
    });
}

// Scroll reveal animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// Voice command simulation
function initVoiceCommands() {
    window.simulateCommand = function(commandType) {
        const voiceWave = document.getElementById('voiceWave');
        const aiResponse = document.getElementById('aiResponse');
        
        if (!voiceWave || !aiResponse) return;
        
        // Show voice wave animation
        voiceWave.classList.add('active');
        
        // Simulate processing
        aiResponse.innerHTML = '<div class="text-center"><div class="animate-spin inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div><p class="mt-4">Processing command...</p></div>';
        
        setTimeout(() => {
            // Show response based on command type
            let response = '';
            
            switch(commandType) {
                case 'inventory':
                    response = `
                        <div class="space-y-4">
                            <div class="text-lg font-semibold mb-4">📦 Current Inventory Status</div>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="p-3 bg-gray-800 rounded-lg">
                                    <div class="text-sm text-gray-400">Olive Oil</div>
                                    <div class="text-orange-500 font-semibold">12% remaining</div>
                                </div>
                                <div class="p-3 bg-gray-800 rounded-lg">
                                    <div class="text-sm text-gray-400">Fresh Basil</div>
                                    <div class="text-yellow-400 font-semibold">28% remaining</div>
                                </div>
                                <div class="p-3 bg-gray-800 rounded-lg">
                                    <div class="text-sm text-gray-400">Tomatoes</div>
                                    <div class="text-green-400 font-semibold">67% remaining</div>
                                </div>
                                <div class="p-3 bg-gray-800 rounded-lg">
                                    <div class="text-sm text-gray-400">Parmesan</div>
                                    <div class="text-green-400 font-semibold">45% remaining</div>
                                </div>
                            </div>
                            <div class="mt-4 p-3 bg-orange-900 bg-opacity-30 rounded-lg border border-orange-500">
                                <div class="text-sm">⚠️ Low stock alert: Olive Oil needs reordering</div>
                            </div>
                        </div>
                    `;
                    break;
                case 'waste':
                    response = `
                        <div class="space-y-4">
                            <div class="text-lg font-semibold mb-4">🗑️ Today's Waste Report</div>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                                    <span>Food Waste</span>
                                    <span class="text-green-400 font-semibold">-35% vs last week</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                                    <span>Total Waste (kg)</span>
                                    <span class="text-orange-400 font-semibold">12.5 kg</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                                    <span>Cost Impact</span>
                                    <span class="text-green-400 font-semibold">$45 saved</span>
                                </div>
                            </div>
                            <div class="mt-4 p-3 bg-green-900 bg-opacity-30 rounded-lg border border-green-500">
                                <div class="text-sm">✅ Waste reduction target achieved!</div>
                            </div>
                        </div>
                    `;
                    break;
                case 'order':
                    response = `
                        <div class="space-y-4">
                            <div class="text-lg font-semibold mb-4">🛒 Purchase Order Generated</div>
                            <div class="space-y-3">
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="font-semibold mb-2">Olive Oil - Extra Virgin</div>
                                    <div class="text-sm text-gray-400 mb-2">Quantity: 5L × 2 bottles</div>
                                    <div class="text-sm text-gray-400">Supplier: Premium Foods Inc.</div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="font-semibold mb-2">Estimated Delivery</div>
                                    <div class="text-orange-400">Tomorrow, 2:00 PM</div>
                                </div>
                            </div>
                            <div class="mt-4 p-3 bg-orange-900 bg-opacity-30 rounded-lg border border-orange-500">
                                <div class="text-sm">✅ Order sent to supplier. Confirmation email sent.</div>
                            </div>
                        </div>
                    `;
                    break;
                case 'compliance':
                    response = `
                        <div class="space-y-4">
                            <div class="text-lg font-semibold mb-4">✅ HACCP Compliance Status</div>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center p-3 bg-green-900 bg-opacity-30 rounded-lg border border-green-500">
                                    <span>Temperature Logs</span>
                                    <span class="text-green-400">100% Complete</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-green-900 bg-opacity-30 rounded-lg border border-green-500">
                                    <span>Cleaning Records</span>
                                    <span class="text-green-400">98% Complete</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-500">
                                    <span>Equipment Checks</span>
                                    <span class="text-yellow-400">85% Complete</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-red-900 bg-opacity-30 rounded-lg border border-red-500">
                                    <span>Pest Control</span>
                                    <span class="text-red-400">⚠️ Action Required</span>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="text-2xl font-bold gradient-text">94%</div>
                                <div class="text-sm text-gray-400">Overall Compliance Score</div>
                            </div>
                        </div>
                    `;
                    break;
                default:
                    response = '<div class="text-gray-400">Command processed successfully</div>';
            }
            
            aiResponse.innerHTML = response;
            voiceWave.classList.remove('active');
            
            // Animate response appearance
            anime({
                targets: aiResponse,
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 500,
                easing: 'easeOutQuad'
            });
        }, 1500);
    };
}

// Dashboard tab switching
function initDashboard() {
    window.switchTab = function(tabName) {
        // Update tab buttons
        document.querySelectorAll('.dashboard-tab').forEach(btn => {
            btn.classList.remove('bg-orange-500', 'text-white');
            btn.classList.add('text-gray-300');
        });
        event.target.classList.add('bg-orange-500', 'text-white');
        event.target.classList.remove('text-gray-300');
        
        const content = document.getElementById('dashboardContent');
        if (!content) return;
        
        let html = '';
        
        switch(tabName) {
            case 'inventory':
                html = `
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Current Stock Levels</h3>
                            <div id="inventoryChart" class="chart-container"></div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Low Stock Alerts</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center p-3 bg-red-900 bg-opacity-30 rounded-lg border border-red-500">
                                    <span>Olive Oil</span>
                                    <span class="text-red-400">12% remaining</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-500">
                                    <span>Fresh Basil</span>
                                    <span class="text-yellow-400">28% remaining</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-green-900 bg-opacity-30 rounded-lg border border-green-500">
                                    <span>Tomatoes</span>
                                    <span class="text-green-400">67% remaining</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                setTimeout(() => renderInventoryChart(), 100);
                break;
            case 'costs':
                html = `
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Food Cost Trends</h3>
                            <div id="costChart" class="chart-container"></div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Cost Breakdown</h3>
                            <div class="space-y-3">
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="flex justify-between mb-2">
                                        <span>This Week</span>
                                        <span class="text-green-400 font-semibold">$2,450</span>
                                    </div>
                                    <div class="text-sm text-gray-400">-8% vs last week</div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="flex justify-between mb-2">
                                        <span>This Month</span>
                                        <span class="text-orange-400 font-semibold">$9,800</span>
                                    </div>
                                    <div class="text-sm text-gray-400">-12% vs last month</div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="flex justify-between mb-2">
                                        <span>Target</span>
                                        <span class="text-gray-400 font-semibold">$10,500</span>
                                    </div>
                                    <div class="text-sm text-green-400">✅ Under budget</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                setTimeout(() => renderCostChart(), 100);
                break;
            case 'waste':
                html = `
                    <div class="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Waste Reduction</h3>
                            <div id="wasteChart" class="chart-container"></div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Waste Metrics</h3>
                            <div class="space-y-3">
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="text-3xl font-bold gradient-text mb-2">35%</div>
                                    <div class="text-sm text-gray-400">Waste reduction this month</div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="text-3xl font-bold gradient-text mb-2">$1,250</div>
                                    <div class="text-sm text-gray-400">Cost savings from waste reduction</div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="text-3xl font-bold gradient-text mb-2">450 kg</div>
                                    <div class="text-sm text-gray-400">Waste prevented this month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                setTimeout(() => renderWasteChart(), 100);
                break;
            case 'compliance':
                html = `
                    <div class="space-y-6">
                        <div class="grid md:grid-cols-4 gap-4">
                            <div class="p-4 bg-green-900 bg-opacity-30 rounded-lg border border-green-500 text-center">
                                <div class="text-2xl font-bold text-green-400">100%</div>
                                <div class="text-sm text-gray-400">Temperature</div>
                            </div>
                            <div class="p-4 bg-green-900 bg-opacity-30 rounded-lg border border-green-500 text-center">
                                <div class="text-2xl font-bold text-green-400">98%</div>
                                <div class="text-sm text-gray-400">Cleaning</div>
                            </div>
                            <div class="p-4 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-500 text-center">
                                <div class="text-2xl font-bold text-yellow-400">85%</div>
                                <div class="text-sm text-gray-400">Equipment</div>
                            </div>
                            <div class="p-4 bg-red-900 bg-opacity-30 rounded-lg border border-red-500 text-center">
                                <div class="text-2xl font-bold text-red-400">78%</div>
                                <div class="text-sm text-gray-400">Pest Control</div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Recent Compliance Activities</h3>
                            <div class="space-y-3">
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <div class="font-semibold">Freezer Temperature Check</div>
                                            <div class="text-sm text-gray-400">-18°C ✓ Within range</div>
                                        </div>
                                        <div class="text-sm text-gray-400">2 hours ago</div>
                                    </div>
                                </div>
                                <div class="p-4 bg-gray-800 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <div class="font-semibold">Prep Area Sanitization</div>
                                            <div class="text-sm text-gray-400">Completed ✓ Verified</div>
                                        </div>
                                        <div class="text-sm text-gray-400">4 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        
        content.innerHTML = html;
        
        // Animate content change
        anime({
            targets: content,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 400,
            easing: 'easeOutQuad'
        });
    };
    
    // Initialize inventory chart on load
    setTimeout(() => {
        if (document.getElementById('inventoryChart')) {
            renderInventoryChart();
        }
    }, 500);
}

// Chart rendering functions
function renderInventoryChart() {
    const chartDom = document.getElementById('inventoryChart');
    if (!chartDom || typeof echarts === 'undefined') return;
    
    const myChart = echarts.init(chartDom);
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Olive Oil', 'Basil', 'Tomatoes', 'Parmesan', 'Garlic', 'Onions'],
            axisLabel: { color: '#9ca3af' }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#9ca3af' }
        },
        series: [{
            data: [12, 28, 67, 45, 80, 55],
            type: 'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#b87333' },
                    { offset: 1, color: '#9caf88' }
                ])
            }
        }]
    };
    myChart.setOption(option);
}

function renderCostChart() {
    const chartDom = document.getElementById('costChart');
    if (!chartDom || typeof echarts === 'undefined') return;
    
    const myChart = echarts.init(chartDom);
    const option = {
        tooltip: { trigger: 'axis' },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            axisLabel: { color: '#9ca3af' }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#9ca3af' }
        },
        series: [{
            data: [3200, 2800, 2650, 2450],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#b87333' },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(184, 115, 51, 0.3)' },
                    { offset: 1, color: 'rgba(184, 115, 51, 0.1)' }
                ])
            }
        }]
    };
    myChart.setOption(option);
}

function renderWasteChart() {
    const chartDom = document.getElementById('wasteChart');
    if (!chartDom || typeof echarts === 'undefined') return;
    
    const myChart = echarts.init(chartDom);
    const option = {
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                { value: 35, name: 'Reduced', itemStyle: { color: '#9caf88' } },
                { value: 65, name: 'Baseline', itemStyle: { color: '#4b5563' } }
            ],
            label: { color: '#9ca3af' }
        }]
    };
    myChart.setOption(option);
}

// Forecasting calculator
function initForecasting() {
    const coversSlider = document.getElementById('dailyCovers');
    const coversValue = document.getElementById('coversValue');
    
    if (coversSlider && coversValue) {
        coversSlider.addEventListener('input', function() {
            coversValue.textContent = this.value + ' covers';
        });
    }
    
    window.calculateForecast = function() {
        const restaurantType = document.getElementById('restaurantType').value;
        const dailyCovers = parseInt(document.getElementById('dailyCovers').value);
        const menuFocus = document.getElementById('menuFocus').value;
        const resultsDiv = document.getElementById('forecastResults');
        
        if (!resultsDiv) return;
        
        // Calculate predictions based on inputs
        const weeklyCovers = dailyCovers * 7;
        let baseMultiplier = 1;
        
        if (restaurantType === 'italian') baseMultiplier = 1.2;
        if (restaurantType === 'french') baseMultiplier = 1.3;
        if (restaurantType === 'asian') baseMultiplier = 1.1;
        
        const predictions = {
            'Olive Oil': Math.round(weeklyCovers * 0.15 * baseMultiplier),
            'Fresh Basil': Math.round(weeklyCovers * 0.08 * baseMultiplier),
            'Tomatoes': Math.round(weeklyCovers * 0.5 * baseMultiplier),
            'Parmesan': Math.round(weeklyCovers * 0.12 * baseMultiplier),
            'Garlic': Math.round(weeklyCovers * 0.3 * baseMultiplier)
        };
        
        const confidence = 95;
        const wasteReduction = 35;
        const costSavings = Math.round(weeklyCovers * 0.5);
        
        resultsDiv.innerHTML = `
            <div class="space-y-6">
                <div class="text-center mb-6">
                    <div class="text-4xl font-bold gradient-text mb-2">${confidence}%</div>
                    <div class="text-gray-400">AI Confidence Level</div>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Predicted Weekly Needs</h3>
                    <div class="space-y-3">
                        ${Object.entries(predictions).map(([item, qty]) => `
                            <div class="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                                <span>${item}</span>
                                <span class="text-orange-400 font-semibold">${qty} units</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="p-4 bg-green-900 bg-opacity-30 rounded-lg border border-green-500 text-center">
                        <div class="text-2xl font-bold text-green-400">${wasteReduction}%</div>
                        <div class="text-sm text-gray-400">Waste Reduction</div>
                    </div>
                    <div class="p-4 bg-orange-900 bg-opacity-30 rounded-lg border border-orange-500 text-center">
                        <div class="text-2xl font-bold text-orange-400">$${costSavings}</div>
                        <div class="text-sm text-gray-400">Weekly Savings</div>
                    </div>
                </div>
            </div>
        `;
        
        // Animate results
        anime({
            targets: resultsDiv,
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 600,
            easing: 'easeOutQuad'
        });
    };
}

// Counter animations
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    anime({
        targets: { value: 0 },
        value: target,
        duration: 2000,
        easing: 'easeOutExpo',
        update: function(anim) {
            element.textContent = Math.round(anim.animatables[0].target.value);
        }
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

