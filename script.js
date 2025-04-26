const workoutPlans = {
    'weight-gain': {
        title: 'Weight Gain Program',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 12-week program focuses on progressive overload to help you gain quality muscle mass.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Chest & Triceps (Heavy)</li>
                <li><strong>Tuesday:</strong> Back & Biceps (Heavy)</li>
                <li><strong>Wednesday:</strong> Rest or Active Recovery</li>
                <li><strong>Thursday:</strong> Legs (Heavy)</li>
                <li><strong>Friday:</strong> Shoulders & Arms (Volume)</li>
                <li><strong>Saturday:</strong> Full Body (Moderate)</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Key Exercises</h3>
            <ul>
                <li>Bench Press (4 sets x 6-8 reps)</li>
                <li>Deadlifts (5 sets x 5 reps)</li>
                <li>Squats (5 sets x 5 reps)</li>
                <li>Pull-ups (4 sets to failure)</li>
                <li>Overhead Press (4 sets x 6-8 reps)</li>
            </ul>
            
            <h3>Nutrition Guidelines</h3>
            <ul>
                <li>Consume 300-500 calories above maintenance</li>
                <li>1g of protein per pound of body weight</li>
                <li>Prioritize complex carbs and healthy fats</li>
                <li>Eat every 2-3 hours</li>
            </ul>
        `
    },
    'weight-loss': {
        title: 'Weight Loss Program',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 8-week fat loss program combines HIIT, strength training, and cardio for maximum fat burning.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Full Body HIIT</li>
                <li><strong>Tuesday:</strong> Strength Training (Upper)</li>
                <li><strong>Wednesday:</strong> Cardio (30-45 mins)</li>
                <li><strong>Thursday:</strong> Strength Training (Lower)</li>
                <li><strong>Friday:</strong> Full Body HIIT</li>
                <li><strong>Saturday:</strong> Active Recovery (Yoga/Walk)</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Key Exercises</h3>
            <ul>
                <li>Burpees (30 sec on, 30 sec off)</li>
                <li>Kettlebell Swings (4 sets x 15 reps)</li>
                <li>Box Jumps (4 sets x 10 reps)</li>
                <li>Battle Ropes (30 sec intervals)</li>
                <li>Mountain Climbers (45 sec intervals)</li>
            </ul>
            
            <h3>Nutrition Guidelines</h3>
            <ul>
                <li>Create 300-500 calorie deficit</li>
                <li>High protein intake (0.8-1g per lb)</li>
                <li>Focus on fiber-rich foods</li>
                <li>Stay hydrated (3-4L water daily)</li>
                <li>Limit processed foods and sugars</li>
            </ul>
        `
    },
    'sixpack': {
        title: 'Six Pack Abs Program',
        image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 6-week program combines core-specific training with fat-burning workouts to reveal your six pack.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Core Focus + Upper Body</li>
                <li><strong>Tuesday:</strong> HIIT Cardio (20 mins)</li>
                <li><strong>Wednesday:</strong> Core Focus + Lower Body</li>
                <li><strong>Thursday:</strong> Active Recovery</li>
                <li><strong>Friday:</strong> Full Core Circuit</li>
                <li><strong>Saturday:</strong> Full Body Workout</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Core Exercises</h3>
            <ul>
                <li>Hanging Leg Raises (4 sets x 12-15 reps)</li>
                <li>Cable Woodchoppers (3 sets x 12/side)</li>
                <li>Ab Wheel Rollouts (3 sets x 10-12 reps)</li>
                <li>Dragon Flags (3 sets x 8-10 reps)</li>
                <li>Plank Variations (60-90 sec holds)</li>
            </ul>
            
            <h3>Nutrition Guidelines</h3>
            <ul>
                <li>Reduce body fat to 10-12% (men) or 16-19% (women)</li>
                <li>Increase protein intake</li>
                <li>Time carbs around workouts</li>
                <li>Stay hydrated to reduce water retention</li>
                <li>Limit alcohol and sodium</li>
            </ul>
        `
    },
    'belly-fat': {
        title: 'Belly Fat Reduction Program',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 4-week program specifically targets visceral fat through metabolic conditioning and dietary changes.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Metabolic Conditioning</li>
                <li><strong>Tuesday:</strong> Core Focus + Cardio</li>
                <li><strong>Wednesday:</strong> Strength Training (Full Body)</li>
                <li><strong>Thursday:</strong> HIIT (20 mins)</li>
                <li><strong>Friday:</strong> Core Circuits</li>
                <li><strong>Saturday:</strong> Active Recovery (Walk/Swim)</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Key Exercises</h3>
            <ul>
                <li>Sprint Intervals (30 sec sprint, 90 sec walk)</li>
                <li>Russian Twists (4 sets x 20/side)</li>
                <li>Bicycle Crunches (3 sets x 30 sec)</li>
                <li>Farmer's Walks (3 sets x 30 sec)</li>
                <li>Flutter Kicks (3 sets x 45 sec)</li>
            </ul>
            
            <h3>Nutrition Guidelines</h3>
            <ul>
                <li>Reduce sugar and refined carbs</li>
                <li>Increase fiber intake (25-30g daily)</li>
                <li>Consume healthy fats (avocados, nuts, olive oil)</li>
                <li>Manage stress (cortisol reduction)</li>
                <li>Get 7-8 hours of quality sleep</li>
            </ul>
        `
    },
    'strength': {
        title: 'Strength Training Program',
        image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 8-week powerlifting-inspired program focuses on increasing your strength in the big compound lifts.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Squat Focus</li>
                <li><strong>Tuesday:</strong> Bench Press Focus</li>
                <li><strong>Wednesday:</strong> Active Recovery</li>
                <li><strong>Thursday:</strong> Deadlift Focus</li>
                <li><strong>Friday:</strong> Overhead Press Focus</li>
                <li><strong>Saturday:</strong> Accessory Work</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Key Exercises</h3>
            <ul>
                <li>Back Squat (5 sets x 5 reps)</li>
                <li>Bench Press (5 sets x 5 reps)</li>
                <li>Deadlift (5 sets x 3 reps)</li>
                <li>Overhead Press (5 sets x 5 reps)</li>
                <li>Weighted Pull-ups (4 sets x 6-8 reps)</li>
            </ul>
            
            <h3>Progression</h3>
            <ul>
                <li>Add 2.5-5 lbs to each lift weekly</li>
                <li>Focus on perfect form</li>
                <li>3-5 minutes rest between heavy sets</li>
                <li>Keep accessory work to 8-12 rep range</li>
            </ul>
        `
    },
    'endurance': {
        title: 'Endurance Building Program',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        content: `
            <h3>Program Overview</h3>
            <p>This 6-week program will improve your cardiovascular endurance and muscular stamina.</p>
            
            <h3>Weekly Schedule</h3>
            <ul>
                <li><strong>Monday:</strong> Long Slow Distance (45-60 mins)</li>
                <li><strong>Tuesday:</strong> Tempo Run (20-30 mins)</li>
                <li><strong>Wednesday:</strong> Cross Training (Swim/Bike)</li>
                <li><strong>Thursday:</strong> Interval Training</li>
                <li><strong>Friday:</strong> Active Recovery</li>
                <li><strong>Saturday:</strong> Long Endurance Session</li>
                <li><strong>Sunday:</strong> Rest</li>
            </ul>
            
            <h3>Key Workouts</h3>
            <ul>
                <li>400m repeats (8-10 with 90 sec rest)</li>
                <li>Hill Repeats (6-8 x 45 sec climbs)</li>
                <li>Fartlek Training (speed play intervals)</li>
                <li>Ladder Workouts (increasing/decreasing intervals)</li>
                <li>Tabata Protocol (20 sec on, 10 sec off)</li>
            </ul>
            
            <h3>Training Tips</h3>
            <ul>
                <li>Focus on breathing patterns</li>
                <li>Gradually increase distance/duration</li>
                <li>Monitor heart rate zones</li>
                <li>Stay hydrated during long sessions</li>
                <li>Incorporate mobility work</li>
            </ul>
        `
    }
};

// DOM elements
const workoutModal = document.querySelector('.workout-details');
const doubtFormModal = document.querySelector('.doubt-form-container');
const closeBtns = document.querySelectorAll('.close-btn');
const viewPlanBtns = document.querySelectorAll('.view-plan');
const askDoubtBtn = document.getElementById('askDoubtBtn');
const closeDoubtFormBtn = document.getElementById('closeDoubtForm');
const workoutTitle = document.getElementById('workout-title');
const workoutImage = document.getElementById('workout-image');
const workoutContent = document.getElementById('workout-content');
const doubtForm = document.getElementById('doubtForm');
const successMessage = document.getElementById('successMessage');

// Show workout plan when button is clicked
viewPlanBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const categoryCard = this.closest('.category-card');
        const category = categoryCard.getAttribute('data-category');
        
        // Set modal content based on category
        const plan = workoutPlans[category];
        workoutTitle.textContent = plan.title;
        workoutImage.style.backgroundImage = `url(${plan.image})`;
        workoutContent.innerHTML = plan.content;
        
        // Show modal
        workoutModal.classList.add('active');
    });
});

// Show doubt form when button is clicked
askDoubtBtn.addEventListener('click', function() {
    doubtFormModal.classList.add('active');
});

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        workoutModal.classList.remove('active');
        doubtFormModal.classList.remove('active');
        successMessage.style.display = 'none';
        doubtForm.reset();
    });
});

// Close modals when clicking outside content
workoutModal.addEventListener('click', function(e) {
    if (e.target === workoutModal) {
        workoutModal.classList.remove('active');
    }
});

doubtFormModal.addEventListener('click', function(e) {
    if (e.target === doubtFormModal) {
        doubtFormModal.classList.remove('active');
        successMessage.style.display = 'none';
        doubtForm.reset();
    }
});

// Handle form submission
doubtForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    // For this demo, we'll just show a success message
    successMessage.style.display = 'block';
    
    // Reset form after 3 seconds
    setTimeout(() => {
        doubtForm.reset();
        successMessage.style.display = 'none';
        doubtFormModal.classList.remove('active');
    }, 3000);
});

// 3D card hover effects
const cards = document.querySelectorAll('.category-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        card.style.boxShadow = `0 15px 30px rgba(0, 255, 136, 0.2)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
});